// cognigen-frontend/src/pages/Dashboard/sample.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser, logout } from "../../api/authApi";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getCurrentUser();
        setUser(response.data.user);
      } catch (err) {
        // If token invalid or missing → redirect to login
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      alert("Logout failed");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100">
        <div className="text-2xl font-semibold text-indigo-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Cognigen
          </h1>
          <div className="flex items-center gap-6">
            <span className="text-gray-700 font-medium">
              Hello,{" "}
              <span className="text-indigo-600 font-bold">
                {user?.name || "User"}
              </span>{" "}
              👋
            </span>
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
          Welcome to Your Personalized AI Learning Journey 🚀
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12">
          Cognigen adapts to your pace, style, and goals using intelligent AI
          agents.
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Learning Path */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className="text-5xl mb-4">🗺️</div>
            <h3 className="text-2xl font-bold text-indigo-600 mb-3">
              Personalized Learning Path
            </h3>
            <p className="text-gray-600">
              AI agent generates a custom roadmap based on your skills, goals,
              and progress.
            </p>
          </div>

          {/* Card 2: Assessment */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-purple-600 mb-3">
              Adaptive Assessments
            </h3>
            <p className="text-gray-600">
              Smart quizzes that adjust difficulty in real-time to challenge you
              perfectly.
            </p>
          </div>

          {/* Card 3: Interview */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className="text-5xl mb-4">🎤</div>
            <h3 className="text-2xl font-bold text-pink-600 mb-3">
              AI-Powered Mock Interviews
            </h3>
            <p className="text-gray-600">
              Practice with an intelligent interviewer that gives real-time
              feedback.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 text-gray-500">
          <p>Built with ❤️ in TamilNadu | Your AI learning companion</p>
        </div>
      </div>
    </div>
  );
}
