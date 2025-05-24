# EchoVerse

EchoVerse is an innovative online collaborative learning platform designed to bring learners together in a vibrant community. It features real-time chat, collaborative code practice, quizzes, and more—empowering users to connect, share knowledge, and grow together.

---

## 🚀 Features
- **Real-Time Collaboration:** Chat in public or private channels, direct messages, and servers. Powered by Socket.io for live updates.
- **AI Chatbot:** Integrated AI assistant that can answer questions about the application and help with educational topics.
- **Code Playground:** Practice coding directly in the browser with syntax highlighting and code execution.
- **Quizzes:** Challenge yourself with interactive quizzes on aptitude, logical reasoning, and DSA.
- **User Authentication:** Secure sign-in/sign-up with Clerk.
- **Audio/Video Rooms:** Powered by LiveKit for seamless communication.
- **File Uploads:** Easily share files within channels, utilizing UploadThing for cloud file uploads.
- **Modern UI/UX:** Built with TailwindCSS, Radix UI, and Framer Motion for a beautiful experience.
- **Database:** Prisma ORM with PostgreSQL for robust data management.

---

## 🛠️ Tech Stack
- **Frontend:** Next.js 14, React, TailwindCSS, Radix UI, Framer Motion
- **Backend:** Next.js API routes, Prisma ORM
- **Database:** PostgreSQL
- **Authentication:** Clerk
- **Real-Time/Media:** LiveKit
- **Code Editor:** Monaco/CodeMirror
- **Other:** TypeScript, ESLint, UploadThing, Lucide Icons

---

## 📦 Folder Structure (Partial)
```
echoverse-demo/
├── app/                   # Main app directory (pages, routes)
│   ├── (auth)/            # Authentication flows
│   ├── (main)/            # Main dashboard
│   ├── about/             # About page
│   ├── code-playground/   # Coding practice
│   ├── quiz/              # Quiz module
│   ├── api/               # API routes (channels, messages, servers, etc.)
│   └── ...
├── components/            # Reusable UI components
├── prisma/                # Prisma schema and migrations
├── public/                # Static assets
├── lib/                   # Utility functions
├── hooks/                 # Custom React hooks
├── utils/                 # Helper utilities
└── ...
```

---

## ⚠️ Important: Public Channel & Server IDs

At the end of development, two public channels were added for demo and public access purposes. For simplicity and to ensure these channels are always available, their `serverId` and `channelId` values are statically defined in [`utils/public-channel-info.tsx`](utils/public-channel-info.tsx).

- These IDs are hardcoded for the original deployment and are not dynamically generated.
- **If you clone or deploy this project, you must update these IDs** to match your own server/channel setup, or the public features may not work as intended.
- To update: Create new servers/channels in your instance and replace the IDs in `utils/public-channel-info.tsx` accordingly.

This approach was chosen to quickly enable public/demo channels at the end of the project. For a production-grade system, consider a more dynamic or admin-configurable approach.

---

## 📝 Getting Started
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/echoverse-demo.git
   cd echoverse-demo
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or yarn or pnpm
   ```
3. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill out required variables (e.g., `DATABASE_URL`, Clerk keys, LiveKit keys).
4. **Set up the database:**
   ```bash
   npx prisma migrate dev
   ```
5. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 💡 Usage
- Sign up or log in
- Join or create servers and channels
- Chat, share files, and collaborate
- Practice coding in the Code Playground
- Take quizzes to assess your skills

---

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License
[MIT](LICENSE)

---

## 🙏 Acknowledgements
- [Next.js](https://nextjs.org/)
- [Clerk](https://clerk.com/)
- [LiveKit](https://livekit.io/)
- [Prisma](https://www.prisma.io/)
- [TailwindCSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)

---

> EchoVerse – Learn. Collaborate. Grow.
