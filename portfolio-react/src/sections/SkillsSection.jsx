// src/sections/SkillsSection.jsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sectionRef = useRef(null);
  const [sectionInView, setSectionInView] = useState(false);
  const controls = useAnimation();
  const { theme } = useTheme();
  
  // Catégories de compétences enrichies avec des descriptions et des icônes
  const categories = [
    { 
      id: 'all', 
      label: 'Toutes',
      description: 'Ensemble de mes compétences techniques et relationnelles',
      icon: '🔍',
    },
    { 
      id: 'frontend', 
      label: 'Frontend',
      description: 'Création d\'interfaces utilisateur modernes et réactives',
      icon: '🎨',
    },
    { 
      id: 'backend', 
      label: 'Backend',
      description: 'Développement de serveurs et API performants',
      icon: '⚙️',
    },
    { 
      id: 'devops', 
      label: 'DevOps/Outils',
      description: 'Déploiement et outils de développement',
      icon: '🛠️',
    },
    { 
      id: 'soft', 
      label: 'Soft Skills',
      description: 'Compétences humaines et collaboratives',
      icon: '🤝',
    },
  ];
  
  // Liste des compétences enrichie avec des descriptions et des expériences
  const skills = [
    // Frontend
    { 
      name: 'HTML5 / CSS3', 
      level: 90, 
      category: 'frontend', 
      icon: '🌐',
      description: 'Maîtrise des standards web modernes et des techniques de mise en page avancées',
      experience: 'Création de sites web sémantiques et accessibles avec animations CSS complexes',
      tags: ['Sémantique', 'Accessibilité', 'Animations', 'Responsive']
    },
    { 
      name: 'JavaScript (ES7+)', 
      level: 85, 
      category: 'frontend', 
      icon: '⚡',
      description: 'Programmation JavaScript moderne incluant les dernières fonctionnalités',
      experience: 'Développement d\'applications web dynamiques avec gestion asynchrone avancée',
      tags: ['ES6+', 'Async/Await', 'DOM', 'Events']
    },
    { 
      name: 'React.js', 
      level: 85, 
      category: 'frontend', 
      icon: '⚛️',
      description: 'Développement d\'interfaces utilisateur avec React et son écosystème',
      experience: 'Création de composants réutilisables, gestion d\'état et hooks personnalisés',
      tags: ['Hooks', 'Context API', 'Redux', 'React Router']
    },
    { 
      name: 'Tailwind CSS / Bootstrap / Sass', 
      level: 88, 
      category: 'frontend', 
      icon: '🎨',
      description: 'Utilisation de frameworks CSS et préprocesseurs pour un développement efficace',
      experience: 'Personnalisation avancée de thèmes et création de systèmes de design cohérents',
      tags: ['TailwindCSS', 'Bootstrap', 'Sass/SCSS', 'Design System']
    },
    { 
      name: 'TypeScript', 
      level: 75, 
      category: 'frontend', 
      icon: '📘',
      description: 'Développement fortement typé pour une meilleure maintenabilité',
      experience: 'Implémentation de types personnalisés et intégration avec des bibliothèques existantes',
      tags: ['Types', 'Interfaces', 'Type Guards', 'Generics']
    },
    { 
      name: 'Context API / Gestion d\'état', 
      level: 80, 
      category: 'frontend', 
      icon: '🔄',
      description: 'Gestion d\'état global et local dans les applications React',
      experience: 'Implémentation de solutions personnalisées avec Context API et hooks',
      tags: ['Context', 'useReducer', 'Redux', 'Zustand']
    },
    { 
      name: 'Design Responsive / Mobile First', 
      level: 90, 
      category: 'frontend', 
      icon: '📱',
      description: 'Création d\'interfaces adaptatives pour tous les appareils',
      experience: 'Développement avec approche Mobile First et media queries avancées',
      tags: ['Media Queries', 'Flexbox', 'Grid', 'RWD']
    },
    { 
      name: 'Figma / Adobe XD', 
      level: 70, 
      category: 'frontend', 
      icon: '🖌️',
      description: 'Conception d\'interfaces et collaboration avec des designers',
      experience: 'Création de maquettes et prototypes interactifs, extraction d\'assets',
      tags: ['UI/UX', 'Wireframing', 'Prototyping', 'Design Tokens']
    },
    
    // Backend
    { 
      name: 'Node.js / Express.js', 
      level: 80, 
      category: 'backend', 
      icon: '🟩',
      description: 'Développement de serveurs et d\'API en JavaScript côté serveur',
      experience: 'Création d\'API RESTful et architecture MVC avec Express',
      tags: ['Middleware', 'Routing', 'MVC', 'API']
    },
    { 
      name: 'RESTful APIs / GraphQL', 
      level: 75, 
      category: 'backend', 
      icon: '🔄',
      description: 'Conception et implémentation d\'APIs modernes',
      experience: 'Développement d\'APIs conformes aux standards REST et intégration GraphQL',
      tags: ['REST', 'GraphQL', 'Apollo', 'CRUD']
    },
    { 
      name: 'MongoDB / Mongoose / MySQL', 
      level: 75, 
      category: 'backend', 
      icon: '🗃️',
      description: 'Gestion de bases de données NoSQL et SQL',
      experience: 'Conception de schémas optimisés et requêtes complexes',
      tags: ['NoSQL', 'SQL', 'Schema Design', 'Aggregation']
    },
    { 
      name: 'JWT / OAuth2', 
      level: 70, 
      category: 'backend', 
      icon: '🔐',
      description: 'Implémentation de systèmes d\'authentification et d\'autorisation',
      experience: 'Sécurisation d\'API avec JWT et intégration OAuth2',
      tags: ['Authentication', 'Authorization', 'Tokens', 'Security']
    },
    { 
      name: 'Gestion des rôles et permissions', 
      level: 65, 
      category: 'backend', 
      icon: '👥',
      description: 'Implémentation de systèmes de contrôle d\'accès',
      experience: 'Développement de middleware d\'autorisation basée sur les rôles',
      tags: ['RBAC', 'ACL', 'Middleware', 'Security']
    },
    { 
      name: 'WebSockets', 
      level: 60, 
      category: 'backend', 
      icon: '📡',
      description: 'Communication bidirectionnelle en temps réel',
      experience: 'Création d\'applications avec notifications et mise à jour en temps réel',
      tags: ['Socket.io', 'Real-time', 'Events', 'Push Notifications']
    },
    
    // DevOps/Outils
    { 
      name: 'Git / GitHub / GitLab', 
      level: 85, 
      category: 'devops', 
      icon: '🔄',
      description: 'Gestion de versions et collaboration',
      experience: 'Workflow Git avancé, PR, revue de code et CI/CD',
      tags: ['Git Flow', 'PRs', 'Code Review', 'Branching']
    },
    { 
      name: 'CI/CD / GitHub Actions', 
      level: 75, 
      category: 'devops', 
      icon: '🚀',
      description: 'Automatisation des déploiements et des tests',
      experience: 'Configuration de pipelines CI/CD pour le déploiement continu',
      tags: ['Pipelines', 'Actions', 'Automation', 'Testing']
    },
    { 
      name: 'Docker / Containerisation', 
      level: 70, 
      category: 'devops', 
      icon: '🐳',
      description: 'Containerisation d\'applications',
      experience: 'Création de Dockerfiles et configuration de services avec Docker Compose',
      tags: ['Containers', 'Docker Compose', 'Deployment', 'Infrastructure']
    },
    { 
      name: 'Postman / Insomnia', 
      level: 80, 
      category: 'devops', 
      icon: '🧪',
      description: 'Test et documentation d\'API',
      experience: 'Création de collections de tests et automatisation de tests d\'API',
      tags: ['API Testing', 'Documentation', 'Automation', 'Mock']
    },
    { 
      name: 'VS Code / Environnement de développement', 
      level: 95, 
      category: 'devops', 
      icon: '📝',
      description: 'Configuration avancée d\'environnements de développement',
      experience: 'Extensions, linting, formatage et personnalisation pour une productivité maximale',
      tags: ['Extensions', 'Linting', 'Snippets', 'Productivity']
    },
    
    // Compétences relationnelles
    { 
      name: 'Travail en équipe (Agile/Scrum)', 
      level: 85, 
      category: 'soft', 
      icon: '👥',
      description: 'Collaboration au sein d\'équipes agiles',
      experience: 'Participation à des sprints, rétrospectives et planification de projet',
      tags: ['Scrum', 'Kanban', 'Sprint', 'Collaboration']
    },
    { 
      name: 'Autonomie et rigueur', 
      level: 90, 
      category: 'soft', 
      icon: '🔍',
      description: 'Capacité à travailler de façon indépendante avec rigueur',
      experience: 'Gestion autonome de projets complexes avec respect des deadlines',
      tags: ['Self-Management', 'Organization', 'Discipline', 'Initiative']
    },
    { 
      name: 'Communication', 
      level: 80, 
      category: 'soft', 
      icon: '💬',
      description: 'Communication claire et efficace',
      experience: 'Présentation de solutions techniques à des publics variés',
      tags: ['Presentation', 'Documentation', 'Clarity', 'Feedback']
    },
    { 
      name: 'Résolution de problèmes', 
      level: 85, 
      category: 'soft', 
      icon: '🧩',
      description: 'Approche méthodique de résolution de problèmes',
      experience: 'Analyse et résolution de bugs complexes avec une méthode structurée',
      tags: ['Debugging', 'Analysis', 'Logical Thinking', 'Troubleshooting']
    },
    { 
      name: 'Organisation et gestion des priorités', 
      level: 80, 
      category: 'soft', 
      icon: '📊',
      description: 'Planification efficace et gestion des tâches',
      experience: 'Gestion de multiples projets avec des délais serrés',
      tags: ['Time Management', 'Prioritization', 'Planning', 'Efficiency']
    },
  ];
  
  // Filtrer les compétences en fonction de la catégorie active
  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  // Languages - données enrichies
  const languages = [
    {
      name: "Arabe",
      level: 100,
      proficiency: "Langue natale",
      description: "Maîtrise complète à l'écrit et à l'oral",
      icon: "🇲🇦",
      color: "from-emerald-500 to-teal-500"
    },
    {
      name: "Français",
      level: 90,
      proficiency: "Courant",
      description: "Communication professionnelle aisée, rédaction de documentation technique",
      icon: "🇫🇷",
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Anglais",
      level: 65,
      proficiency: "Niveau intermédiaire",
      description: "Capacité à comprendre la documentation technique et communiquer sur des sujets professionnels",
      icon: "🇬🇧",
      color: "from-red-500 to-purple-500"
    }
  ];
  
  // Utiliser un observateur d'intersection pour détecter quand la section est visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSectionInView(true);
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);
  
  // Animation variants
  const sectionTitleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  const categoryContainerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        staggerChildren: 0.1
      }
    }
  };
  
  const categoryItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };
  
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };
  
  const gridItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };
  
  const languageSectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };
  
  const languageItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  // État pour la catégorie survolée (pour l'effet d'information)
  const [hoveredCategory, setHoveredCategory] = useState(null);

  // Trouver la catégorie actuellement active
  const activeTabInfo = categories.find(cat => cat.id === activeCategory);

  return (
    <section 
      id="skills" 
      className={`py-24 ${theme === 'light' 
        ? 'bg-gradient-to-b from-gray-50 to-white text-gray-900' 
        : 'bg-gradient-to-b from-secondary-950 to-secondary-900 text-white'} transition-colors duration-500`} 
      ref={sectionRef}
    >
      <div className="container max-w-6xl mx-auto px-4">
        {/* En-tête de section amélioré */}
        <div className="mb-16 text-center">
          <motion.div
            className="inline-block mb-3 px-4 py-1.5 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
            initial={{ opacity: 0, y: -10 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
          >
            Expertises Techniques & Humaines
          </motion.div>
          
          <motion.h2 
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${theme === 'light' ? 'text-secondary-900' : 'text-white'}`}
            initial={{ opacity: 0, y: -20 }}
            animate={controls}
            variants={sectionTitleVariants}
          >
            Mes <span className="text-primary-600 dark:text-primary-400">compétences</span>
          </motion.h2>
          
          <motion.p
            className={`max-w-2xl mx-auto text-lg ${theme === 'light' ? 'text-secondary-600' : 'text-secondary-300'}`}
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.6, delay: 0.2 } }
            }}
          >
            Un aperçu des technologies et compétences que j'ai développées au cours de mon parcours professionnel
          </motion.p>
        </div>
        
        {/* Filtres de catégories améliorés avec info-bulle descriptive */}
        <motion.div 
          className="mb-16 relative"
          variants={categoryContainerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Description de la catégorie active */}
          <motion.div 
            className={`mb-8 mx-auto max-w-xl text-center ${
              theme === 'light' ? 'text-secondary-700' : 'text-secondary-300'
            }`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={activeCategory}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center mb-2">
              <span className="text-2xl mr-2">{activeTabInfo?.icon}</span>
              <h3 className={`text-xl font-semibold ${
                theme === 'light' ? 'text-secondary-900' : 'text-white'
              }`}>
                {activeTabInfo?.label}
              </h3>
            </div>
            <p>{activeTabInfo?.description}</p>
          </motion.div>
          
          {/* Onglets de catégorie */}
          <div className="flex flex-wrap justify-center">
            <div className={`${
              theme === 'light' 
                ? 'bg-white shadow-md' 
                : 'bg-secondary-800/80 shadow-md backdrop-blur-sm'
              } rounded-full p-1.5 inline-flex flex-wrap justify-center transition-colors`}
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all m-1 relative ${
                    activeCategory === category.id
                      ? `bg-primary-600 text-white shadow-md dark:bg-primary-500 ${
                          theme === 'light' ? 'ring-2 ring-primary-100' : 'ring-2 ring-primary-900'
                        }`
                      : theme === 'light'
                        ? 'text-secondary-700 hover:bg-gray-100'
                        : 'text-secondary-300 hover:bg-secondary-700/70'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  variants={categoryItemVariants}
                  custom={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="inline-flex items-center">
                    <span className="mr-1.5">{category.icon}</span>
                    {category.label}
                  </span>
                  
                  {/* Info-bulle au survol */}
                  {hoveredCategory === category.id && category.id !== activeCategory && (
                    <motion.div 
                      className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 rounded text-xs w-max max-w-[200px] ${
                        theme === 'light' 
                          ? 'bg-secondary-800 text-white' 
                          : 'bg-secondary-700 text-white'
                      } shadow-lg z-10`}
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {category.description}
                      <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 ${
                        theme === 'light' ? 'bg-secondary-800' : 'bg-secondary-700'
                      }`}></div>
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Compteur de compétences */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } }
          }}
        >
          <p className={`${
            theme === 'light' ? 'text-secondary-600' : 'text-secondary-400'
          }`}>
            <span className="font-medium">
              {filteredSkills.length} compétence{filteredSkills.length > 1 ? 's' : ''}
            </span> {activeCategory !== 'all' ? `en ${categories.find(c => c.id === activeCategory)?.label}` : 'au total'}
          </p>
        </motion.div>
        
        {/* Grille de compétences améliorée avec animations */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            variants={gridContainerVariants}
            initial="hidden"
            animate={controls}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {filteredSkills.map((skill, index) => (
              <motion.div 
                key={skill.name} 
                className={`group ${
                  theme === 'light'
                    ? 'bg-white shadow-md hover:shadow-lg'
                    : 'bg-secondary-800/90 hover:bg-secondary-800'
                } rounded-xl p-6 border ${
                  theme === 'light' 
                    ? 'border-gray-100' 
                    : 'border-secondary-700'
                } hover:border-primary-500 transition-all duration-300 relative overflow-hidden`}
                variants={gridItemVariants}
                custom={index}
                whileHover={{ y: -5 }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Cercle décoratif en arrière-plan */}
                <div className={`absolute top-0 right-0 w-24 h-24 rounded-full -mr-10 -mt-10 opacity-10 ${
                  theme === 'light' 
                    ? 'bg-primary-500' 
                    : 'bg-primary-400'
                } transition-opacity group-hover:opacity-20`}></div>
                
                <div className="flex items-start mb-4">
                  <div className={`flex-shrink-0 w-12 h-12 ${
                    theme === 'light' 
                      ? 'bg-primary-100 text-primary-600' 
                      : 'bg-primary-900/30 text-primary-400'
                  } rounded-lg flex items-center justify-center text-2xl mr-4`}>
                    <span>{skill.icon}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold mb-1 ${
                      theme === 'light' ? 'text-secondary-900' : 'text-white'
                    }`}>
                      {skill.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {skill.tags && skill.tags.slice(0, 2).map((tag, idx) => (
                        <span 
                          key={idx} 
                          className={`text-xs px-2 py-1 rounded-full ${
                            theme === 'light' 
                              ? 'bg-primary-50 text-primary-700' 
                              : 'bg-primary-900/20 text-primary-300'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                      {skill.tags && skill.tags.length > 2 && (
                        <span 
                          className={`text-xs px-2 py-1 rounded-full ${
                            theme === 'light' 
                              ? 'bg-gray-100 text-gray-800' 
                              : 'bg-secondary-700 text-secondary-300'
                          }`}
                        >
                          +{skill.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className={`text-sm ${
                    theme === 'light' 
                      ? 'text-secondary-600' 
                      : 'text-secondary-400'
                  } line-clamp-2 transition-colors`}>
                    {skill.description}
                  </p>
                </div>
                
                {/* Barre de progression améliorée */}
                <div className="relative">
                  <div className={`w-full h-1.5 ${
                    theme === 'light' 
                      ? 'bg-gray-200' 
                      : 'bg-secondary-700'
                  } rounded-full overflow-hidden transition-colors`}>
                    <motion.div 
                      className={`h-full ${skill.level > 85 
                        ? 'bg-gradient-to-r from-green-500 to-primary-500' 
                        : skill.level > 70 
                          ? 'bg-gradient-to-r from-primary-500 to-primary-400' 
                          : 'bg-gradient-to-r from-primary-400 to-yellow-500'
                      } rounded-full transition-colors`}
                      initial={{ width: 0 }}
                      animate={sectionInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ 
                        duration: 1.5, 
                        delay: 0.1 * index, 
                        ease: [0.34, 1.56, 0.64, 1] 
                      }}
                    />
                  </div>
                  
                  <div className="flex justify-between mt-2">
                    <span className={`text-xs font-medium ${
                      theme === 'light' 
                        ? 'text-secondary-600' 
                        : 'text-secondary-400'
                    } transition-colors`}>Niveau</span>
                    <span className={`text-xs font-semibold ${
                      skill.level > 85 
                        ? 'text-green-500 dark:text-green-400' 
                        : skill.level > 70 
                          ? 'text-primary-600 dark:text-primary-400'
                          : 'text-yellow-500 dark:text-yellow-400'
                    }`}>{skill.level}%</span>
                  </div>
                </div>
                
                {/* Carte d'info détaillée au survol */}
                <AnimatePresence>
                  {hoveredSkill === skill.name && (
                    <motion.div 
                      className={`absolute inset-0 ${
                        theme === 'light'
                          ? 'bg-white'
                          : 'bg-secondary-800'
                      } p-6 rounded-xl z-10 shadow-lg`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center mb-4">
                        <div className={`flex-shrink-0 w-12 h-12 ${
                          theme === 'light' 
                            ? 'bg-primary-100 text-primary-600' 
                            : 'bg-primary-900/30 text-primary-400'
                        } rounded-lg flex items-center justify-center text-2xl mr-4`}>
                          <span>{skill.icon}</span>
                        </div>
                        <h3 className={`text-lg font-bold ${
                          theme === 'light' ? 'text-secondary-900' : 'text-white'
                        }`}>{skill.name}</h3>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className={`text-sm font-medium mb-1 ${
                          theme === 'light' ? 'text-secondary-900' : 'text-white'
                        }`}>Description</h4>
                        <p className={`text-sm ${
                          theme === 'light' ? 'text-secondary-700' : 'text-secondary-300'
                        }`}>{skill.description}</p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className={`text-sm font-medium mb-1 ${
                          theme === 'light' ? 'text-secondary-900' : 'text-white'
                        }`}>Expérience</h4>
                        <p className={`text-sm ${
                          theme === 'light' ? 'text-secondary-700' : 'text-secondary-300'
                        }`}>{skill.experience}</p>
                      </div>
                      
                      <div>
                        <h4 className={`text-sm font-medium mb-2 ${
                          theme === 'light' ? 'text-secondary-900' : 'text-white'
                        }`}>Tags</h4>
                        <div className="flex flex-wrap gap-2">
                          {skill.tags && skill.tags.map((tag, idx) => (
                            <span 
                              key={idx} 
                              className={`text-xs px-2 py-1 rounded-full ${
                                theme === 'light' 
                                  ? 'bg-primary-50 text-primary-700' 
                                  : 'bg-primary-900/20 text-primary-300'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* Section des langues */}
        <motion.div
          className="mb-10"
          initial="hidden"
          animate={controls}
          variants={languageSectionVariants}
        >
          <div className="text-center mb-10">
            <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
              theme === 'light' ? 'text-secondary-900' : 'text-white'
            }`}>
              Langues <span className="text-primary-600 dark:text-primary-400">maîtrisées</span>
            </h3>
            <p className={`max-w-2xl mx-auto ${
              theme === 'light' ? 'text-secondary-600' : 'text-secondary-300'
            }`}>
              Les langues que je parle et leur niveau de maîtrise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                className={`${
                  theme === 'light'
                    ? 'bg-white shadow-md'
                    : 'bg-secondary-800/90'
                } rounded-xl p-6 border ${
                  theme === 'light' 
                    ? 'border-gray-100' 
                    : 'border-secondary-700'
                } transition-all duration-300 relative overflow-hidden`}
                variants={languageItemVariants}
                custom={index}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              >
                {/* Fond gradié */}
                <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${language.color}`}></div>
                
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-3">{language.icon}</div>
                  <div>
                    <h4 className={`text-xl font-bold ${
                      theme === 'light' ? 'text-secondary-900' : 'text-white'
                    }`}>{language.name}</h4>
                    <p className={`text-sm font-medium ${
                      theme === 'light' ? 'text-primary-600' : 'text-primary-400'
                    }`}>{language.proficiency}</p>
                  </div>
                </div>
                
                <p className={`text-sm mb-6 ${
                  theme === 'light' ? 'text-secondary-600' : 'text-secondary-300'
                }`}>
                  {language.description}
                </p>
                
                <div className="relative">
                  <div className={`w-full h-1.5 ${
                    theme === 'light' 
                      ? 'bg-gray-200' 
                      : 'bg-secondary-700'
                  } rounded-full overflow-hidden`}>
                    <motion.div 
                      className={`h-full bg-gradient-to-r ${language.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={sectionInView ? { width: `${language.level}%` } : { width: 0 }}
                      transition={{ 
                        duration: 1.5, 
                        delay: 0.3 + (0.1 * index), 
                        ease: [0.34, 1.56, 0.64, 1] 
                      }}
                    />
                  </div>
                  
                  <div className="flex justify-between mt-2">
                    <span className={`text-xs font-medium ${
                      theme === 'light' 
                        ? 'text-secondary-600' 
                        : 'text-secondary-400'
                    }`}>Niveau</span>
                    <span className={`text-xs font-semibold ${
                      theme === 'light' 
                        ? 'text-secondary-900' 
                        : 'text-white'
                    }`}>{language.level}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Appel à l'action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } }
          }}
        >
          <p className={`mb-8 ${
            theme === 'light' ? 'text-secondary-600' : 'text-secondary-300'
          }`}>
            Intéressé(e) par mon profil et mes compétences ? N'hésitez pas à me contacter !
          </p>
          
          <motion.a
            href="#contact"
            className={`inline-flex items-center px-6 py-3 rounded-full font-medium ${
              theme === 'light'
                ? 'bg-primary-600 text-white hover:bg-primary-700'
                : 'bg-primary-500 text-white hover:bg-primary-400'
            } transition-colors shadow-md hover:shadow-lg`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">Me contacter</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;