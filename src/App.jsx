import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Heart, ChevronLeft, ChevronRight, MessageCircle, User } from 'lucide-react'
import './App.css'

function App() {
  // Dados dos vídeos
  const videos = [
    {
      id: 1,
      title: "Introdução ao Curso",
      description: "Bem-vindos ao nosso curso! Neste vídeo introdutório, vamos apresentar o que você vai aprender.",
      iframe: '<iframe src="https://drive.google.com/file/d/1YN2SzE1_HbhZCwRxRmwchiudqB0XJ9u9/preview" width="640" height="480" allow="autoplay"></iframe>',
      likes: 15,
      comments: [
        { id: 1, user: "João Silva", text: "Ótima introdução! Estou animado para o curso.", timestamp: "2024-01-15 10:30" },
        { id: 2, user: "Maria Santos", text: "Muito claro e objetivo. Parabéns!", timestamp: "2024-01-15 14:20" }
      ]
    },
    {
      id: 2,
      title: "Conceitos Fundamentais",
      description: "Neste segundo vídeo, vamos abordar os conceitos fundamentais que você precisa conhecer.",
      iframe: '<iframe src="https://drive.google.com/file/d/1_4Jw2FZNNlMXYxFawug-uTuLjDKAQVfF/preview" width="640" height="480" allow="autoplay"></iframe>',
      likes: 12,
      comments: [
        { id: 3, user: "Pedro Costa", text: "Explicação muito didática!", timestamp: "2024-01-16 09:15" }
      ]
    }
  ]

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [videoLikes, setVideoLikes] = useState(videos.map(v => ({ id: v.id, likes: v.likes, liked: false })))
  const [comments, setComments] = useState(videos.map(v => ({ id: v.id, comments: v.comments })))
  const [newComment, setNewComment] = useState('')

  const currentVideo = videos[currentVideoIndex]

  const handleLike = () => {
    setVideoLikes(prev => prev.map(v => 
      v.id === currentVideo.id 
        ? { ...v, likes: v.liked ? v.likes - 1 : v.likes + 1, liked: !v.liked }
        : v
    ))
  }

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        user: "Usuário Anônimo",
        text: newComment,
        timestamp: new Date().toLocaleString('pt-BR')
      }
      
      setComments(prev => prev.map(v => 
        v.id === currentVideo.id 
          ? { ...v, comments: [...v.comments, comment] }
          : v
      ))
      setNewComment('')
    }
  }

  const goToPrevious = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1)
    }
  }

  const goToNext = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1)
    }
  }

  const currentVideoLikes = videoLikes.find(v => v.id === currentVideo.id)
  const currentVideoComments = comments.find(v => v.id === currentVideo.id)?.comments || []

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Cursos Online</h1>
          <p className="text-gray-600 mt-1">Plataforma de Aprendizado</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Video Section */}
          <div className="relative">
            {/* Navigation Arrows */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                disabled={currentVideoIndex === 0}
                className="bg-white/90 hover:bg-white shadow-lg"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                disabled={currentVideoIndex === videos.length - 1}
                className="bg-white/90 hover:bg-white shadow-lg"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Video Container */}
            <div className="flex justify-center p-8 bg-gray-50">
              <div 
                className="w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-lg"
                dangerouslySetInnerHTML={{ __html: currentVideo.iframe.replace('width="640" height="480"', 'width="100%" height="100%"') }}
              />
            </div>
          </div>

          {/* Video Info */}
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{currentVideo.title}</h2>
                <p className="text-gray-600 mb-4">{currentVideo.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>Vídeo {currentVideoIndex + 1} de {videos.length}</span>
                </div>
              </div>
              
              {/* Like Button */}
              <div className="flex items-center space-x-2">
                <Button
                  variant={currentVideoLikes?.liked ? "default" : "outline"}
                  size="sm"
                  onClick={handleLike}
                  className="flex items-center space-x-2"
                >
                  <Heart className={`h-4 w-4 ${currentVideoLikes?.liked ? 'fill-current' : ''}`} />
                  <span>{currentVideoLikes?.likes || 0}</span>
                </Button>
              </div>
            </div>

            {/* Comments Section */}
            <div className="border-t pt-6">
              <div className="flex items-center space-x-2 mb-4">
                <MessageCircle className="h-5 w-5 text-gray-500" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Comentários ({currentVideoComments.length})
                </h3>
              </div>

              {/* Add Comment */}
              <div className="mb-6">
                <div className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-gray-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <textarea
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Adicione um comentário..."
                      className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows="3"
                    />
                    <div className="mt-2 flex justify-end">
                      <Button onClick={handleAddComment} disabled={!newComment.trim()}>
                        Comentar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comments List */}
              <div className="space-y-4">
                {currentVideoComments.map((comment) => (
                  <div key={comment.id} className="flex space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-gray-900">{comment.user}</span>
                          <span className="text-xs text-gray-500">{comment.timestamp}</span>
                        </div>
                        <p className="text-gray-700">{comment.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600">
            © 2024 Cursos Online - Plataforma de Aprendizado
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

