import express, { Request, Response } from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import nodemailer from 'nodemailer';

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize server-side Gemini AI client with required User-Agent
let aiClient: GoogleGenAI | null = null;
function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY || '';
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build'
        }
      }
    });
  }
  return aiClient;
}

// System instructions for Nigusu Minale's AI Portfolio Assistant
const NIGUSU_SYSTEM_INSTRUCTION = `You are the AI Copilot for Nigusu Minale's personal portfolio website.
Your job is to answer questions from recruiters, hiring managers, potential clients, and fellow developers about Nigusu Minale in a professional, warm, and confident tone.

Key Facts about Nigusu Minale:
- **Title**: Senior Full-Stack Engineer & AI Systems Developer
- **Core Bio**: Passionate software developer with 5+ years of experience engineering scalable web applications, distributed backend services, and high-performance AI integration layers.
- **Top Tech Stack**:
  - Frontend: React, Next.js, TypeScript, Tailwind CSS, Redux/Zustand, Motion, WebGL / Recharts
  - Backend: Node.js, Express, Python (FastAPI/Django), Go, PostgreSQL, Redis, MongoDB, GraphQL, REST APIs
  - AI & ML: Gemini API (@google/genai), RAG Pipelines, Vector DBs (Pinecone, ChromaDB), LangChain, PyTorch, OpenAI API
  - Cloud & DevOps: Docker, Kubernetes, AWS (EC2, S3, Lambda), GCP (Cloud Run, Firebase), CI/CD (GitHub Actions), Terraform
- **Key Projects Highlighted**:
  1. **AetherAI Hub**: Next-gen multimodal AI playground leveraging Gemini 3.6 Flash & Live API with real-time audio/video streaming.
  2. **PulseAnalytics Platform**: High-throughput distributed analytics engine processing over 1M events/day with React visualizers.
  3. **Nexus Cloud Engine**: Microservice orchestration suite reducing deployment pipeline times by 45%.
  4. **OmniFlow Workspace**: Real-time collaborative workspace with operational transformation and live presence indicators.
- **Education & Certifications**: B.S. in Computer Science & Engineering, AWS Certified Solutions Architect, Google Cloud Certified Professional Developer.
- **Current Availability**: Open to Senior/Lead Full-Stack Engineer roles, AI Integration contracts, and high-impact advisory positions.
- **Contact Info**: Email: nigusuminale@gmail.com, GitHub: github.com/nigusuminale, LinkedIn: linkedin.com/in/nigusu-minale.

Guidelines for responses:
1. Be concise, highly professional, polite, and helpful.
2. Structure answers with clean formatting or bullet points when summarizing skills or projects.
3. If asked about salary or private personal details not listed, politely state that Nigusu can discuss specific terms directly via email at nigusuminale@gmail.com.`;

// API Endpoints
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', developer: 'Nigusu Minale', timestamp: new Date().toISOString() });
});

// AI Portfolio Copilot Endpoint
app.post('/api/portfolio/chat', async (req: Request, res: Response) => {
  try {
    const { message, history = [] } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      // Intelligent fallback when GEMINI_API_KEY is not set yet
      const lowerMsg = message.toLowerCase();
      let reply = `Hello! I am Nigusu Minale's AI Assistant. Nigusu is a Senior Full-Stack Engineer & AI Systems Developer with 5+ years of experience building high-impact web and AI solutions. You can reach out directly via nigusuminale@gmail.com.`;

      if (lowerMsg.includes('skill') || lowerMsg.includes('tech') || lowerMsg.includes('stack')) {
        reply = `Nigusu specializes in React, TypeScript, Node.js, Python, PostgreSQL, Docker, GCP/AWS, and integrating Gemini AI models into production applications.`;
      } else if (lowerMsg.includes('project') || lowerMsg.includes('work') || lowerMsg.includes('built')) {
        reply = `Nigusu's featured projects include AetherAI Hub (multimodal Gemini AI platform), PulseAnalytics Engine (1M+ events/day data platform), and Nexus Cloud Engine (microservice orchestration).`;
      } else if (lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('hire')) {
        reply = `Nigusu is currently open for Senior Full-Stack & AI Engineering roles or consulting! You can email him at nigusuminale@gmail.com or connect on LinkedIn.`;
      }

      return res.json({ reply });
    }

    const ai = getAiClient();

    // Format chat messages
    const contents: any[] = history.map((item: { sender: string; text: string }) => ({
      role: item.sender === 'user' ? 'user' : 'model',
      parts: [{ text: item.text }]
    }));

    contents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents,
      config: {
        systemInstruction: NIGUSU_SYSTEM_INSTRUCTION,
        temperature: 0.7
      }
    });

    const reply = response.text || "I'm happy to help with any questions about Nigusu Minale's background, projects, or technical expertise!";
    return res.json({ reply });

  } catch (error: any) {
    console.error('Error in AI Portfolio Chat:', error);
    return res.json({
      reply: `Nigusu Minale is a Senior Full-Stack Engineer with expertise in React, TypeScript, Node.js, Python, and Gemini AI integrations. Feel free to contact him directly at nigusuminale@gmail.com!`
    });
  }
});

// Contact Form Message Submission Endpoint
app.post('/api/contact', async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message, emailJsConfig } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const targetEmail = process.env.CONTACT_RECEIVER_EMAIL || 'nigusuminale@gmail.com';
    const emailSubject = subject || `New Portfolio Message from ${name}`;

    console.log(`[Contact Form Received] From: ${name} <${email}> | Subject: ${emailSubject} | Target: ${targetEmail}`);

    let dispatched = false;

    // 1. Try sending via Nodemailer if SMTP credentials exist in process.env
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || 'smtp.gmail.com',
          port: parseInt(process.env.SMTP_PORT || '587'),
          secure: process.env.SMTP_PORT === '465',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
          }
        });

        await transporter.sendMail({
          from: `"${name} via Portfolio" <${process.env.SMTP_USER}>`,
          replyTo: email,
          to: targetEmail,
          subject: emailSubject,
          text: `Name: ${name}\nEmail: ${email}\nSubject: ${emailSubject}\n\nMessage:\n${message}`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #1e293b; max-width: 600px; border: 1px solid #e2e8f0; rounded: 12px;">
              <h2 style="color: #4f46e5; margin-top: 0;">New Portfolio Contact Message</h2>
              <p><strong>Sender:</strong> ${name} (&lt;<a href="mailto:${email}">${email}</a>&gt;)</p>
              <p><strong>Subject:</strong> ${emailSubject}</p>
              <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
              <p style="white-space: pre-wrap; background: #f8fafc; padding: 16px; border-radius: 8px; font-size: 14px;">${message}</p>
              <p style="font-size: 12px; color: #64748b; margin-top: 24px;">Sent from Nigusu Minale Portfolio Website</p>
            </div>
          `
        });
        dispatched = true;
        console.log(`[Email Dispatched via Nodemailer SMTP] Sent to ${targetEmail}`);
      } catch (smtpErr) {
        console.warn('Nodemailer SMTP dispatch failed:', smtpErr);
      }
    }

    // 2. Try sending via EmailJS REST API if keys are provided
    const serviceId = emailJsConfig?.serviceId || process.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = emailJsConfig?.templateId || process.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = emailJsConfig?.publicKey || process.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!dispatched && serviceId && templateId && publicKey) {
      try {
        const emailJsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
              from_name: name,
              from_email: email,
              to_email: targetEmail,
              subject: emailSubject,
              message: message,
              reply_to: email
            }
          })
        });

        if (emailJsResponse.ok) {
          dispatched = true;
          console.log(`[Email Dispatched via EmailJS REST API] Sent to ${targetEmail}`);
        }
      } catch (emailJsErr) {
        console.warn('EmailJS REST API dispatch failed:', emailJsErr);
      }
    }

    return res.json({
      success: true,
      dispatched,
      message: `Thank you ${name}! Your message has been sent to Nigusu Minale (${targetEmail}).`
    });
  } catch (e: any) {
    console.error('Error handling contact form request:', e);
    return res.status(500).json({ error: 'Failed to process message' });
  }
});

// Start Server & Integrate Vite Middleware
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '127.0.0.1', () => {
    console.log(`Nigusu Minale Portfolio server running on http://127.0.0.1:${PORT}`);
  });
}

startServer();
