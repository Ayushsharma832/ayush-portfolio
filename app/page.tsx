export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-24">

        {/* HERO SECTION */}
        <section>
          <h1 className="text-5xl font-bold tracking-tight">
            Ayush Sharma
          </h1>

          <p className="mt-4 text-xl text-gray-600">
          Conversational AI Engineer | Voice & Agentic Systems
          </p>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Associate Developer with 1+ year of experience designing and deploying
            enterprise-grade conversational AI solutions. Specialized in building
            voicebots and chatbots using Omilia, Amelia, and Dialogflow.
            Currently expanding into high-code Agentic AI systems using Python and modern AI frameworks.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="https://www.linkedin.com/in/ayush-sharma-09a1951b8/"
              target="_blank"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Ayushsharma832"
              target="_blank"
              className="px-6 py-3 border border-gray-900 rounded-lg hover:bg-gray-100 transition"
            >
              GitHub
            </a>
            <a
              href="/Ayush_Sharma_Resume.pdf"
              target="_blank"
              className="px-6 py-3 border border-gray-900 rounded-lg hover:bg-gray-100 transition"
            >
              Download Resume
            </a>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Experience</h2>

          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold">
              Associate Developer – EXL
            </h3>
            <p className="text-gray-500 mt-1">1 Year | Conversational AI & Voice Automation</p>

            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
            <li>Designed and deployed enterprise-grade conversational AI solutions serving real user interactions.</li>
            <li>Architected intent structures and multi-turn dialogue flows for voice and chat automation.</li>
            <li>Integrated external APIs and backend systems for dynamic and context-aware responses.</li>
            <li>Improved conversational accuracy through testing, tuning, and iterative refinement.</li>
            <li>Collaborated with cross-functional teams to deliver scalable AI automation solutions.</li>
          </ul>

          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition">
            <h3 className="text-xl font-semibold mb-2">
              Enterprise RAG Conversational Assistant
            </h3>

            <p className="text-gray-400 mb-4">
              Production-style Retrieval-Augmented Generation (RAG) system with
              semantic search, dynamic document upload, persistent FAISS indexing,
              and Groq LLM integration for enterprise Q&A.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-800 px-3 py-1 rounded text-sm">Python</span>
              <span className="bg-gray-800 px-3 py-1 rounded text-sm">FastAPI</span>
              <span className="bg-gray-800 px-3 py-1 rounded text-sm">FAISS</span>
              <span className="bg-gray-800 px-3 py-1 rounded text-sm">Sentence-Transformers</span>
              <span className="bg-gray-800 px-3 py-1 rounded text-sm">Groq LLM</span>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/Ayushsharma832/enterprise-rag-assistant"
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                GitHub →
              </a>
            </div>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold">
              Autonomous AI Trade Monitoring Agent
            </h3>
            <p className="mt-2 text-gray-700">
              Co-developed a real-time financial anomaly detection system combining
              machine learning, deep learning, and LLM-based reasoning. Implemented
              ensemble detection models including Isolation Forest, LOF, One-Class SVM,
              Z-Score, and LSTM Autoencoder. Integrated live market data, generated
              contextual explanations using Groq LLM, and delivered instant Telegram alerts.
              Deployed on AWS EC2 with multi-user monitoring support.
            </p>

            <a
              href="https://github.com/Ayushsharma832/Automated-Trade-Monitoring-Agent"
              target="_blank"
              className="inline-block mt-3 text-blue-600 hover:underline"
            >
              View Project →
            </a>
          </div>

          <div className="grid gap-6">

            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold">FlickFlow – ML Movie Recommendation System</h3>
              <p className="mt-2 text-gray-700">
                Built a content-based recommendation system using Python, Pandas, and scikit-learn.
                Implemented similarity algorithms and deployed using Streamlit Cloud.
              </p>
              <a
                href="https://flickflow.streamlit.app/"
                target="_blank"
                className="inline-block mt-3 text-blue-600 hover:underline"
              >
                View Live Project →
              </a>
            </div>

            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold">LocalAgroConnect – Full Stack Marketplace</h3>
              <p className="mt-2 text-gray-700">
                Developed a full-stack agricultural trade platform using HTML, CSS, JS, PHP, and MySQL.
                Designed multi-role system for buyers, sellers, and learners.
              </p>
              <a
                href="https://github.com/Ayushsharma832/the_natural_farm"
                target="_blank"
                className="inline-block mt-3 text-blue-600 hover:underline"
              >
                View Source Code →
              </a>
            </div>

            <div className="border rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Dynamic Market Insights – Tableau Dashboard</h3>
              <p className="mt-2 text-gray-700">
                Designed interactive sales analytics dashboard using Excel and Tableau.
                Generated actionable business insights for hardware market trends.
              </p>
              <a
                href="https://public.tableau.com/app/profile/ayush.sharma8368/viz/DynamicMarketInsightsTableau-PoweredSalesAnalysis/Dashboard1"
                target="_blank"
                className="inline-block mt-3 text-blue-600 hover:underline"
              >
                View Dashboard →
              </a>
            </div>

          </div>
        </section>
    {/* CURRENTLY BUILDING */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Currently Building</h2>

          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold">
              High-Code Agentic AI Systems (In Progress)
            </h3>
            <p className="mt-2 text-gray-700">
              Developing advanced conversational and agent-based AI systems using
              Python, FastAPI, and modern LLM frameworks. Focused on tool-using agents,
              RAG pipelines, and enterprise-ready AI orchestration.
            </p>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Technical Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
            <div>Python</div>
            <div>SQL</div>
            <div>Conversational AI</div>
            <div>Dialogflow</div>
            <div>Omilia</div>
            <div>Amelia</div>
            <div>Machine Learning</div>
            <div>Streamlit</div>
            <div>Git & GitHub</div>
            <div>Tableau</div>
            <div>REST APIs</div>
            <div>Intent Architecture</div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-12 border-t text-center text-gray-500">
          <p>© {new Date().getFullYear()} Ayush Sharma</p>
          <p className="mt-2">
            Open to Conversational AI & GenAI Engineering Opportunities
          </p>
        </footer>

      </div>
    </main>
  );
}
