import { useState } from 'react';
import { motion } from 'framer-motion';
import { todoListItems } from '../lib/data';

interface ToDo {
  id: number;
  text: string;
  completed: boolean;
  category: string;
}

const ToDoListSection = () => {
  const [todos, setTodos] = useState<ToDo[]>(todoListItems);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const toggleComplete = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const filteredTodos = activeFilter === 'all' 
    ? todos 
    : todos.filter(todo => todo.category === activeFilter);

  const categories = ['all', ...Array.from(new Set(todos.map(todo => todo.category)))];
  
  // Calculate progress percentage
  const completedCount = todos.filter(todo => todo.completed).length;
  const progressPercentage = (completedCount / todos.length) * 100;
  
  return (
    <section id="todo-list" className="py-20 bg-gradient-to-b from-white to-rose/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <motion.h2 
            className="text-3xl md:text-4xl font-playfair font-bold text-navy mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Adventure List
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gold mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <motion.p 
            className="text-navy-light max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            All the beautiful moments we want to create together.
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-lg border border-rose/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-navy-light">Our Progress</span>
                <span className="text-sm font-medium text-navy">{completedCount} of {todos.length} completed</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div 
                  className="bg-rose h-2.5 rounded-full" 
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                ></motion.div>
              </div>
            </div>
            
            {/* Category filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category, index) => (
                <motion.button
                  key={index}
                  className={`px-4 py-2 text-sm rounded-full capitalize transition-colors ${
                    activeFilter === category 
                      ? 'bg-navy text-white' 
                      : 'bg-gray-100 text-navy-light hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveFilter(category)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
            
            {/* Todo items */}
            <motion.ul 
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {filteredTodos.map((todo, index) => (
                <motion.li
                  key={todo.id}
                  className={`p-4 rounded-lg border flex items-start gap-3 ${
                    todo.completed 
                      ? 'border-green-200 bg-green-50' 
                      : 'border-gray-200 bg-white hover:bg-gray-50'
                  } transition-colors cursor-pointer`}
                  onClick={() => toggleComplete(todo.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center border-2 mt-0.5 ${
                    todo.completed 
                      ? 'border-green-500 bg-green-500 text-white' 
                      : 'border-gray-300'
                  }`}>
                    {todo.completed && <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>}
                  </div>
                  <div>
                    <p className={`text-navy font-medium ${todo.completed ? 'line-through opacity-60' : ''}`}>
                      {todo.text}
                    </p>
                    <span className="text-xs font-medium bg-navy/10 rounded-full px-2 py-0.5 capitalize text-navy/80 mt-2 inline-block">
                      {todo.category}
                    </span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
            
            {filteredTodos.length === 0 && (
              <motion.div 
                className="text-center p-8 text-navy-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p>No items in this category yet.</p>
              </motion.div>
            )}
            
            <div className="text-center mt-8 pt-4 border-t border-gray-100">
              <p className="text-navy-light text-sm font-medium">Click on an item to mark it as completed.</p>
              <p className="text-xs text-navy-light mt-1">
                Let's create beautiful memories together ❤️
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ToDoListSection;