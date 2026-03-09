import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { tasks } from '../data/tasks';
import TaskCard from '../components/TaskCard';
import NotFoundPage from './NotFoundPage';
import { motion } from 'framer-motion';
import { Sparkles, Home } from 'lucide-react';

const TaskPage = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [isValidating, setIsValidating] = useState(true);

  // Security: explicitly tell search engines NOT to index this page dynamically.
  useEffect(() => {
    const metaRobots = document.createElement('meta');
    metaRobots.name = "robots";
    metaRobots.content = "noindex, nofollow";
    document.head.appendChild(metaRobots);

    return () => {
      document.head.removeChild(metaRobots);
    };
  }, []);

  useEffect(() => {
    // Simulate a tiny loading delay to make it feel like "decrypting" a QR
    const timer = setTimeout(() => {
      const foundTask = tasks.find(t => t.id === taskId);
      setTask(foundTask || null);
      setIsValidating(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [taskId]);

  if (isValidating) {
    return (
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh'
      }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        >
          <Sparkles size={48} color="var(--primary)" />
        </motion.div>
        <p style={{ marginTop: '20px', color: 'var(--text-light)', fontSize: '1.1rem' }}>
          Расшифровываем код...
        </p>
      </div>
    );
  }

  if (!task) {
    return <NotFoundPage />;
  }

  return (
    <div className="container" style={{ paddingBottom: '40px', maxWidth: '700px' }}>
      <TaskCard task={task} />
      
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <button 
          onClick={() => navigate('/')} 
          className="btn btn-outline"
        >
          <Home size={20} />
          Вернуться на главную
        </button>
      </div>
    </div>
  );
};

export default TaskPage;
