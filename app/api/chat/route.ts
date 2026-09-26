import { NextResponse } from "next/server";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const NEXVIBE_SYSTEM_INSTRUCTION = `
You are the official AI Assistant for Nexvibe, a forward-thinking digital agency and software development company based in Dhaka, Bangladesh.
Your goal is to be helpful, professional, friendly, and concise. Always represent Nexvibe with high credibility.

### About Nexvibe:
- Core Focus: Custom Full-Stack Web Development, Mobile App Development (iOS/Android), UI/UX Design, AI Engineering, Cloud Architecture, and Performance Optimization.
- Mission: Empower enterprises, startups, and personal brands with production-ready, scalable, and high-performance digital solutions without barriers.
- Location: Based in Dhaka, Bangladesh, operating as a globally distributed remote agency serving clients worldwide.

### Pricing Packages:
1. STARTER (৳5,000+ / Starting investment):
   - Modern Responsive Landing Page / Business Website, Fast Load Speed, Basic SEO & Social Integration, Contact Form & WhatsApp Integration, 1 Month Free Bug Support.
2. PROFESSIONAL (৳15,000+ / Most Popular):
   - Dynamic CMS or Web App, Custom Animations, Database Integration & Auth, RESTful API Integration, 3 Months Priority Maintenance.
3. PREMIUM ENTERPRISE (৳30,000+ / Custom Scope):
   - Custom Full-Stack Web & Mobile Apps, High-Traffic Cloud Architecture, Payment Gateways (bKash, Nagad, Stripe), RBAC Admin Dashboard, Dedicated Project Manager, 6 Months 24/7 Priority Support.

### Contact Information:
- WhatsApp: +8801747874773 (Direct WhatsApp consultation)
- Email: hello@nexvibe.tech
- Website: https://nexvibe.tech (Pages: /services, /portfolio, /about, /careers, /contact)

Guidelines:
- Answer client questions warmly and clearly. Keep answers concise with bullet points.
- You can communicate in both English and Bengali.
`;

function getLocalFallbackResponse(query: string): string {
  const q = query.toLowerCase();

  if (q.includes("price") || q.includes("pricing") || q.includes("cost") || q.includes("package") || q.includes("দাম") || q.includes("টাকা") || q.includes("প্যাকেজ")) {
    return `Here are Nexvibe's flexible pricing plans:

• **Starter Package (৳5,000+):** High-speed landing page, mobile responsive, SEO, contact form, WhatsApp button, 1 month support.
• **Professional Package (৳15,000+):** Dynamic CMS / web application, custom UI/UX animations, database & secure auth, 3 months priority support.
• **Premium Enterprise (৳30,000+):** Full-stack web/mobile app, cloud architecture, payment gateways (bKash/Nagad/Stripe), dedicated manager, 6 months 24/7 support.

Would you like to discuss a custom quote? Reach us directly on WhatsApp at **+8801747874773**!`;
  }

  if (q.includes("service") || q.includes("offer") || q.includes("web") || q.includes("app") || q.includes("design") || q.includes("সার্ভিস")) {
    return `Nexvibe specializes in end-to-end digital engineering:

• **Web Development:** Fast, responsive Next.js/React websites and web applications.
• **Mobile Apps:** Cross-platform iOS & Android applications with native performance.
• **UI/UX Design:** User-centric design systems, wireframes, and prototypes in Figma.
• **AI & Automation:** Custom AI integrations, workflow automation, and intelligent chatbots.
• **Cloud & DevOps:** High-availability deployment, database architectures, and API integrations.

Tell me about your project idea, or explore our full list on the **/services** page!`;
  }

  if (q.includes("contact") || q.includes("whatsapp") || q.includes("phone") || q.includes("email") || q.includes("যোগাযোগ") || q.includes("হোয়াটসঅ্যাপ") || q.includes("নম্বর")) {
    return `You can connect with the Nexvibe team directly:

• **WhatsApp:** [+8801747874773](https://wa.me/8801747874773) (Fastest response)
• **Email:** hello@nexvibe.tech
• **Meeting:** You can schedule a free consultation via our **/contact** page.

We typically respond within 24-48 hours. How can we help you today?`;
  }

  if (q.includes("portfolio") || q.includes("work") || q.includes("project") || q.includes("কাজ")) {
    return `We build high-impact platforms for startups and scaling businesses. Check out our featured projects and live case studies on the **/portfolio** page!

Would you like to build something similar? Let's discuss your requirements!`;
  }

  return `Hello! I'm the Nexvibe AI Assistant. 

We help businesses build modern websites, mobile apps, and custom software. How can I help you today? You can ask me about:
• Our pricing packages (Starter, Pro, Enterprise)
• Web & mobile app services
• Starting a project or connecting on WhatsApp (+8801747874773)`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages: ChatMessage[] = body.messages || [];

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid messages array" }, { status: 400 });
    }

    const lastMessage = messages[messages.length - 1];
    const userPrompt = lastMessage.content || "";

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      const fallbackReply = getLocalFallbackResponse(userPrompt);
      return NextResponse.json({
        reply: fallbackReply,
        source: "local-fallback",
      });
    }

    const geminiContents = messages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${apiKey}`;

    const geminiRes = await fetch(geminiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: NEXVIBE_SYSTEM_INSTRUCTION }],
        },
        contents: geminiContents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 800,
        },
      }),
    });

    if (!geminiRes.ok) {
      const fallbackReply = getLocalFallbackResponse(userPrompt);
      return NextResponse.json({
        reply: fallbackReply,
        source: "local-fallback",
      });
    }

    const geminiData = await geminiRes.json();
    const candidateText =
      geminiData.candidates?.[0]?.content?.parts?.[0]?.text ||
      getLocalFallbackResponse(userPrompt);

    return NextResponse.json({
      reply: candidateText,
      source: "gemini",
    });
  } catch {
    return NextResponse.json({
      reply:
        "I'm here to help! Feel free to ask about Nexvibe's web, mobile, or AI services, or reach out directly on WhatsApp at +8801747874773.",
      source: "error-fallback",
    });
  }
}
