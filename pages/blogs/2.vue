<script setup>
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const qudrilateralFormImage = {
    url: '/images/qudrilateral_form.png',
    des: 'PolySpell gameplay screenshot: Bob creating a qudrilateral trail to cast a spell'
}

const MainBG = {
    url: '/images/closeup_011.gif'
}

const title = {
    title: 'PolySpell: Where Shapes Cast Spells',
    date: 'August 2024',
    image: MainBG.url
}

const items = [
    {type: 'Development Time', text: ['June-August 2024']},
    {type: 'Tech Stack', text: ['Unity', 'C#']},
    {type: 'Role', text: ['Solo Developer']},
    {type: 'Genre', text: ['Puzzle Strategy']},
]

//const intro = 'PolySpell is a unique puzzle game that blends shape-based spell casting with strategic combat. As a solo developer, I created this game to challenge players\' creativity and problem-solving skills in a vibrant, magical world.'
const intro = 'It all started with a simple question: What if a game could teach players to see patterns in chaos? This question sparked the journey that led to the creation of ‘PolySpell,’ a game where every polygon tells a story. Dive into a world where your creativity and strategy shape the outcome, and every decision leads to a new adventure.'

const coreFeatures = [
  {
    title: 'Pattern-Based Combat',
    description: 'Create polygonal trails to trigger various magical effects',
    media: {
      url: '/images/Pattern_Based_Combat_003.gif',
      des: 'Pattern-Based Combat gameplay demonstration'
    }
  },
  {
    title: 'Vibrant Neon Aesthetic',
    description: 'Immerse yourself in a colorful, fast-paced world',
    media: {
      url: '/images/Vibrant_Neon_Aesthetic.gif',
      des: 'Vibrant Neon Aesthetic gameplay demonstration'
    }
  },
  {
    title: 'Strategic Energy Management',
    description: 'Balance spell-casting with energy conservation',
    media: {
      url: '/images/Strategic_Energy_Management.gif',
      des: 'Strategic Energy Management gameplay demonstration'
    }
  },
  {
    title: 'Dynamic Difficulty',
    description: 'Face evolving challenges as you progress',
    media: {
      url: '/images/Dynamic_Difficulty.gif',
      des: 'Dynamic Difficulty gameplay demonstration'
    }
  }
]

const developmentProcess = [
  'Conceptualization and Prototyping: Refined core mechanics through iterative design',
  'Initial Prototype: Implemented core gameplay mechanics and basic features',
  'Playtesting and Refinement: Continuously improved based on player feedback'
]

const challengeAndSolution = {
  challenge: 'Implementing a flexible and intuitive spell-casting system, Implementing accurate ball-in-polygon detection for spell effects',
  solution: 'Developed a custom polygon recognition algorithm combined with Unity\'s physics system for dynamic spell effects, Transitioned from ray-casting to the winding number algorithm for improved precision'
}

const learningOutcome = 'Deepened understanding of game physics, procedural generation, and the importance of iterative design based on player feedback'

const links = {
  demo: 'https://play.unity.com/en/games/1e487e88-1290-4639-9562-490eca0f9a66/polyspell-v01',
  source: 'https://github.com/WeizhengLiang/PolySpell'
}

const gameFlowDiagram = ref(`
graph TD
    A[Player Input] -->|CreateShape| B[Shape Creation]
    B -->|CastSpell| C[Spell Casting]
    C -->|ApplyEffect| D[Enemy Reaction]
    D -->|UpdateGameState| E[Player Feedback]
    E --> A
`)

const codeSnippets = {
  CreateShape: `void CreateShape(Vector2[] points) {
    // Create a new polygon shape
    PolygonCollider2D shape = gameObject.AddComponent<PolygonCollider2D>();
    shape.points = points;
}`,
  CastSpell: `void CastSpell(PolygonCollider2D shape) {
    // Determine spell type based on shape
    SpellType spellType = DetermineSpellType(shape);
    // Cast the spell
    SpellManager.Cast(spellType);
}`,
  ApplyEffect: `void ApplyEffect(Enemy target, SpellType spellType) {
    // Apply spell effect to the enemy
    target.TakeDamage(spellType.damage);
    target.ApplyStatusEffect(spellType.effect);
}`
}

const keyAlgorithms = {
  PolygonRecognition: `bool IsPointInPolygon(Vector2 point, Vector2[] vertices) {
    int windingNumber = 0;
    for (int i = 0; i < vertices.Length; i++) {
        int next = (i + 1) % vertices.Length;
        if (vertices[i].y <= point.y) {
            if (vertices[next].y > point.y && IsLeft(vertices[i], vertices[next], point) > 0)
                windingNumber++;
        }
        else if (vertices[next].y <= point.y && IsLeft(vertices[i], vertices[next], point) < 0)
            windingNumber--;
    }
    return windingNumber != 0;
}`,
  BallPhysics: `void UpdateBallPhysics(Ball ball) {
    Vector2 velocity = ball.GetVelocity();
    float speed = velocity.magnitude;
    
    // Apply energy loss over time
    speed *= (1 - energyLossRate * Time.deltaTime);
    
    // Update velocity with new speed
    ball.SetVelocity(velocity.normalized * speed);
    
    // Check for collisions and apply bounce effects
    HandleCollisions(ball);
}`
}

const designSketches = [
  {
    url: '/images/PrototypePage1.png',
    des: 'Game Scene Elements and Energy System Design'
  },
  {
    url: '/images/PrototypePage2.png',
    des: 'Basic Player Movement and Spell Casting'
  },
  {
    url: '/images/PrototypePage3.png',
    des: 'Spell pattern variations'
  },
  {
    url: '/images/PrototypePage4.png',
    des: 'Player Feedback and Game Cycle Design'
  }
]

const showViewer = ref(false)
const currentImageIndex = ref(0)

const openImageViewer = (index) => {
  currentImageIndex.value = index
  showViewer.value = true
}

const closeImageViewer = () => {
  showViewer.value = false
}

const nextImage = () => {
  if (currentImageIndex.value < designSketches.length - 1) {
    currentImageIndex.value++
  }
}

const previousImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  }
}

// 为聊天截图添加查看器状态
const showChatViewer = ref(false)
const currentChatIndex = ref(0)
const currentChatGroup = ref('')

const feedbackImages = {
  playerFeedback: [
    { url: '/images/player_feedback_1.png', des: 'Player sharing gameplay experience' },
    { url: '/images/player_feedback_2.png', des: 'Suggestions for improvement' },
    { url: '/images/player_feedback_3.png', des: 'Player discussing game mechanics' }
  ],
  bugFeedback: [
    { url: '/images/bug_feedback_1.png', des: 'Critical bug report from player' }
  ],
  versionRelease: [
    { url: '/images/release_1.png', des: 'New version announcement' },
    { url: '/images/release_2.png', des: 'Player reactions to update' },
    { url: '/images/release_3.png', des: 'Providing bug fixes and new features info' }
  ]
}

const openChatViewer = (group, index) => {
  currentChatGroup.value = group
  currentChatIndex.value = index
  showChatViewer.value = true
}

const closeChatViewer = () => {
  showChatViewer.value = false
}

const nextChatImage = () => {
  if (currentChatIndex.value < feedbackImages[currentChatGroup.value].length - 1) {
    currentChatIndex.value++
  }
  
}

const previousChatImage = () => {
  if (currentChatIndex.value > 0) {
    currentChatIndex.value--
  }
}

const openLink = (url) => {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="items-center">
    <BlogTitle :title="title" />
    <BlogIntro :items="items" :intro="intro" />

    <div class="blog-main-container">
      <BlogImage :image="qudrilateralFormImage" />

      <BlogBody>
        <h2>Core Features</h2>
        <div class="grid grid-cols-2 gap-8">
          <div v-for="feature in coreFeatures" :key="feature.title" class="mb-8">
            <h3 class="font-bold">{{ feature.title }}</h3>
            <p class="mb-4">{{ feature.description }}</p>
            <img 
              v-if="feature.media" 
              :src="feature.media.url" 
              :alt="feature.media.des"
              class="rounded-lg shadow-lg mx-auto"
              style="width: 480px; height: auto;"
            />
          </div>
        </div>
      </BlogBody>

      <!-- Game Flow Diagram and Code Snippets -->
        <BlogBody>
          <h2>Game Flow and Key Code Snippets</h2>
          <p>This diagram illustrates the core gameplay loop of PolySpell, along with key code snippets:</p>
        </BlogBody>

        <div class="flex justify-between gap-2 my-4">
          <div class="flex justify-center items-center">
            <vue-mermaid-string :value="gameFlowDiagram"></vue-mermaid-string>
          </div>
          <div class="space-y-4">
            <div v-for="(snippet, key) in codeSnippets" :key="key">
              <h3 class="font-bold">{{ key }}()</h3>
              <pre class="bg-gray-100 p-2 rounded"><code>{{ snippet }}</code></pre>
            </div>
          </div>
        </div>
        
        <!-- Key Algorithms -->
        <div class="mt-8">
          <h3 class="font-bold text-xl mb-4">Key Algorithms</h3>
          <div class="space-y-6">
            <div>
              <h4 class="text-lg font-semibold mb-3">Polygon Recognition</h4>
              <div class="bg-gray-50 rounded-lg p-6">
                <pre class="bg-gray-100 p-4 rounded-lg"><code>{{ keyAlgorithms.PolygonRecognition }}</code></pre>
                <p class="mt-4 text-sm text-gray-600">
                  Winding number algorithm for accurate point-in-polygon detection
                </p>
              </div>
            </div>

            <div>
              <h4 class="text-lg font-semibold mb-3">Dynamic Ball Physics</h4>
              <div class="bg-gray-50 rounded-lg p-6">
                <pre class="bg-gray-100 p-4 rounded-lg"><code>{{ keyAlgorithms.BallPhysics }}</code></pre>
                <p class="mt-4 text-sm text-gray-600">
                  Custom physics system for smooth ball movement and collision handling
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Placeholder for gameplay video -->
      <!-- <div class="my-4">
        [Placeholder: Short gameplay video showcasing pattern-based combat and neon aesthetics]
      </div> -->

      <div>
        <h2>Development Journey</h2>
        <BlogBody>
          <div class="space-y-12">
            <!-- Conceptualization and Prototyping -->
            <div class="space-y-8">
              <div>
                <h3 class="font-bold text-xl mb-4">Conceptualization and Prototyping</h3>
                <p class="mt-2 mb-6 text-gray-700">
                  The project began with brainstorming sessions aimed at defining the core gameplay mechanics and visual style. 
                  The concept of using polygonal patterns to trigger various effects quickly became central to the project. 
                  Initially, the idea was for players to create these polygonal patterns by clicking on chosen vertices with the mouse.
                </p>

                <!-- 添加灵感来源部分 -->
                <div class="bg-gray-50 rounded-lg p-6 mb-6">
                  <h4 class="text-lg font-semibold mb-3">Inspiration</h4>
                  <div class="flex items-start gap-6">
                    <img 
                      src="/images/3d_pinball.gif" 
                      alt="3D Pinball Space Cadet Screenshot"
                      class="w-1/3 rounded-lg shadow-md"
                    />
                    <p class="text-gray-700">
                      However, this initial vision evolved during development. I was inspired by recalling the very first game 
                      I ever played on a PC, 3D Pinball for Windows - Space Cadet. This memory led me to incorporate a similar mechanic 
                      where the ball bounces dynamically within the game, mirroring the engaging physics of Space Cadet.
                    </p>
                  </div>
                </div>

                <!-- 设计草图展示 -->
                <div class="mt-8">
                  <h4 class="text-lg font-semibold mb-4">Early Design Sketches</h4>
                  <p class="mb-4 text-gray-600">These sketches document the evolution of the core gameplay mechanics:</p>
                  <div class="grid grid-cols-2 gap-6">
                    <div v-for="(sketch, index) in designSketches" 
                         :key="index"
                         class="relative group cursor-pointer"
                         @click="openImageViewer(index)"
                    >
                      <div class="absolute top-2 left-2 bg-black/70 text-white px-3 py-1 rounded-full">
                        Step {{ index + 1 }}
                      </div>
                      <img 
                        :src="sketch.url"
                        :alt="sketch.des"
                        class="rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
                        style="width: 100%; height: auto;"
                      />
                      <div class="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 rounded-b-lg 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {{ sketch.des }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Initial Prototype -->
            <div class="space-y-6">
              <div>
                <h3 class="font-bold text-xl">Initial Prototype</h3>
                <p class="mt-2 mb-6 text-gray-700">
                  The initial prototype focused on implementing the core mechanics of the game. 
                  I started with the ball physics and basic polygon creation system. The prototype 
                  helped validate the fun factor of drawing shapes and watching the ball interact 
                  with them. This early version used simple visuals but established the foundation 
                  for the game's unique gameplay loop.
                </p>
              </div>
              
              <div class="bg-gray-50 rounded-lg p-6">
                <h4 class="text-lg font-semibold mb-4">Early Gameplay Demo</h4>
                <div class="flex justify-center">
                  <img 
                    src="/images/initial_prototype.gif" 
                    alt="Initial prototype gameplay demonstration"
                    class="rounded-lg shadow-md w-2/3"
                  />
                </div>
                <p class="mt-4 text-sm text-gray-600 text-center">
                  Early prototype showing basic shape creation and ball physics
                </p>
              </div>
            </div>

            <!-- Playtesting and Refinement -->
            <div class="space-y-6">
              <div>
                <h3 class="font-bold text-xl">Playtesting and Refinement</h3>
                <p class="mt-2 mb-6 text-gray-700">
                  Throughout the development process, I maintained close communication with playtesters through our WeChat group. 
                  Their feedback was instrumental in identifying issues, suggesting improvements, and validating new features. 
                  This collaborative approach helped shape the game into a more polished and enjoyable experience.
                </p>
              </div>
              
              <div class="space-y-8">
                <!-- Player Feedback Group -->
                <div class="bg-gray-50 rounded-lg p-6">
                  <h4 class="text-lg font-semibold mb-3">Player Experience Feedback</h4>
                  <div class="grid grid-cols-3 gap-4">
                    <div v-for="(image, index) in feedbackImages.playerFeedback" 
                         :key="index"
                         class="relative group cursor-pointer"
                         @click="openChatViewer('playerFeedback', index)"
                    >
                      <img 
                        :src="image.url"
                        :alt="image.des"
                        class="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                      />
                      <div class="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 rounded-b-lg 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {{ image.des }}
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 text-sm text-gray-600">
                    Players sharing their gameplay experiences and suggestions for improvements
                  </p>
                </div>

                <!-- Bug Report Group -->
                <div class="bg-gray-50 rounded-lg p-6">
                  <h4 class="text-lg font-semibold mb-3">Bug Discovery</h4>
                  <div class="flex justify-center">
                    <div class="relative group cursor-pointer w-2/3"
                         @click="openChatViewer('bugFeedback', 0)"
                    >
                      <img 
                        :src="feedbackImages.bugFeedback[0].url"
                        :alt="feedbackImages.bugFeedback[0].des"
                        class="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                      />
                      <div class="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 rounded-b-lg 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {{ feedbackImages.bugFeedback[0].des }}
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 text-sm text-gray-600">
                    Critical bug report that helped improve game stability
                  </p>
                </div>

                <!-- Version Update Group -->
                <div class="bg-gray-50 rounded-lg p-6">
                  <h4 class="text-lg font-semibold mb-3">New Version Release</h4>
                  <div class="grid grid-cols-3 gap-4">
                    <div v-for="(image, index) in feedbackImages.versionRelease" 
                         :key="index"
                         class="relative group cursor-pointer"
                         @click="openChatViewer('versionRelease', index)"
                    >
                      <img 
                        :src="image.url"
                        :alt="image.des"
                        class="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                      />
                      <div class="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 rounded-b-lg 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {{ image.des }}
                      </div>
                    </div>
                  </div>
                  <p class="mt-3 text-sm text-gray-600">
                    Announcing new features and bug fixes, along with player reactions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BlogBody>
      </div>

      <!-- Placeholder for before/after comparison image -->
      <!-- <div class="my-4">
        [Placeholder: Before/After image comparing ray-casting and winding number algorithm results]
      </div> -->

      <div>
        <h2>Learning Outcome</h2>
        <BlogBody>
          <p>{{ learningOutcome }}</p>

          <h3 class="font-bold text-xl mb-4">Conclusion</h3>
          <p class="mb-4">
            PolySpell successfully achieved its goal of creating an engaging 2D roguelike that merges action, strategy, and puzzle-solving through pattern-based spell casting. The game currently includes:
          </p>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li>A fully developed initial level that introduces and balances the core mechanics effectively.</li>
            <li>Smooth, responsive gameplay optimized for desktop platforms, with future plans for expansion to mobile devices.</li>
            <li>A cohesive neon-themed aesthetic that blends custom and sourced assets seamlessly.</li>
          </ul>

          <h3 class="font-bold text-xl mb-4">Reflection</h3>
          <p class="mb-6">
            Developing PolySpell was a transformative experience that taught me invaluable lessons. From integrating the winding number algorithm to refining gameplay based on user feedback, this project emphasized the importance of persistence and maintaining a holistic view of development. It reinforced the critical role of feedback and iterative design in crafting a polished and engaging final product.
          </p>
        </BlogBody>
      </div>

      <div class="mt-8">
        <h2>Future Plans</h2>
        <BlogBody>
          <p class="mb-4">
            While PolySpell has achieved its initial goals, there are exciting features planned for future updates:
          </p>
          <ul class="list-disc pl-6 space-y-2">
            <li>
              <strong>Multiplayer Mode:</strong> Implementing a competitive two-player mode where players can challenge each other's spell-casting skills in real-time duels.
            </li>
            <li>
              <strong>Online Leaderboard:</strong> Adding a global ranking system for single-player mode, allowing players to compete for high scores and compare their performance with the community.
            </li>
          </ul>
          <p class="mt-4">
            These additions aim to enhance the social aspect of the game while maintaining its core focus on creative spell-casting and strategic gameplay.
          </p>
        </BlogBody>
      </div>

      <div class="flex justify-between mt-6">
        <Button @click="openLink(links.demo)">
          Play Demo
        </Button>
        <Button @click="openLink(links.source)" variant="outline">
          View Source Code
        </Button>
      </div>

      <BlogBody>
        <p class="mt-6 text-center">
          PolySpell represents my passion for creating engaging, innovative gameplay experiences. 
          It's a testament to the power of creative problem-solving and iterative design in game development.
        </p>
      </BlogBody>
    <!-- </div> -->
  </div>

  <!-- Image Viewer Modal -->
  <div v-if="showViewer" 
       class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
       @click="closeImageViewer"
  >
    <div class="relative max-w-4xl mx-auto">
      <img 
        :src="designSketches[currentImageIndex].url"
        :alt="designSketches[currentImageIndex].des"
        class="max-h-[80vh] w-auto"
      />
      <div class="absolute bottom-4 left-0 right-0 text-center text-white">
        <p class="text-lg mb-2">Step {{ currentImageIndex + 1 }} of 4</p>
        <p>{{ designSketches[currentImageIndex].des }}</p>
      </div>
      <button 
        v-if="currentImageIndex > 0"
        class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors"
        @click.stop="previousImage"
      >
        ←
      </button>
      <button 
        v-if="currentImageIndex < designSketches.length - 1"
        class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors"
        @click.stop="nextImage"
      >
        →
      </button>
      <button 
        class="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors"
        @click.stop="closeImageViewer"
      >
        ×
      </button>
    </div>
  </div>

  <!-- Chat Image Viewer Modal -->
  <div v-if="showChatViewer" 
       class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
       @click="closeChatViewer"
  >
    <div class="relative max-w-4xl mx-auto">
      <img 
        :src="feedbackImages[currentChatGroup][currentChatIndex].url"
        :alt="feedbackImages[currentChatGroup][currentChatIndex].des"
        class="max-h-[80vh] w-auto"
      />
      <div class="absolute bottom-4 left-0 right-0 text-center text-white">
        <p class="text-lg mb-2">
          Image {{ currentChatIndex + 1 }} of {{ feedbackImages[currentChatGroup].length }}
        </p>
        <p>{{ feedbackImages[currentChatGroup][currentChatIndex].des }}</p>
      </div>
      <button 
        v-if="currentChatIndex > 0"
        class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors"
        @click.stop="previousChatImage"
      >
        ←
      </button>
      <button 
        v-if="currentChatIndex < feedbackImages[currentChatGroup].length - 1"
        class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition-colors"
        @click.stop="nextChatImage"
      >
        →
      </button>
      <button 
        class="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors"
        @click.stop="closeChatViewer"
      >
        ×
      </button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.blog-main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  max-width: 100%;
  overflow-x: auto;
}
</style>