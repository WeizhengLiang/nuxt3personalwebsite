<script setup>
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import CodeBlock from '@/components/ui/code-block'

const MainBG = {
    url: '/images/DungBallDomination/mainmenu.png'
}

const title = {
    title: 'Dungball Domination: A Game Jam Adventure',
    date: 'October 5-8, 2024',
    image: MainBG.url
}

const items = [
    {type: 'Development Time', text: ['72 Hours (Ludum Dare 56)']},
    {type: 'Tech Stack', text: ['Unity', 'C#']},
    {type: 'Role', text: ['Lead Programmer']},
    {type: 'Genre', text: ['Casual', 'Top-down']},
    // {type: 'Achievement', text: ['Top 15% Overall rating', 'Top 1.5% in Humor rating']}
]

//const intro = 'PolySpell is a unique puzzle game that blends shape-based spell casting with strategic combat. As a solo developer, I created this game to challenge players\' creativity and problem-solving skills in a vibrant, magical world.'
const intro = 'Get ready to roll with Dungball Domination, a cartoony top-down view casual game! After your beloved dung ball being trampled by a farmer, your mission is to contaminate the farm to take revenge on the farmer! Sneaking into the farm, you\'ll need to collect dung dropped by the livestock and cover the floors in a smelly masterpiece. But watch out! The farmer and his animals are on the lookout. Dodge their footsteps to survive! Fill every corner with dung and leave the farmer overwhelmed by the stench to claim your victory in this hilarious battle of wits!'

const coreFeatures = [
  {
    title: 'Dynamic Dung Ball Mechanics',
    description: 'Control a beetle pushing a dung ball that changes size based on collections and usage',
    media: {
      url: '/images/DungBallDomination/DungBallGetsBig.gif',
      des: 'Dung ball size changing mechanics demonstration'
    }
  },
  {
    title: 'Strategic Floor Coverage',
    description: 'Leave dung trails strategically while managing your ball size',
    media: {
      url: '/images/DungBallDomination/StrategicfloorCoverage.gif',
      des: 'Floor coverage gameplay demonstration'
    }
  },
  {
    title: 'Dodge and Survive',
    description: 'Avoid animal footsteps while completing your mission',
    media: {
      url: '/images/DungBallDomination/DogeAndSurvive2.gif',
      des: 'Dodging gameplay demonstration'
    }
  },
  {
    title: 'Engaging UI and Animations',
    description: 'Enjoy polished visuals and entertaining animations',
    media: {
      url: '/images/DungBallDomination/startingAnimation.gif',
      des: 'UI and animation showcase'
    }
  }
]

const developmentProcess = [
  'Brainstorming (8h): Team ideation and role assignment after theme reveal',
  'Core Mechanics (24h): Implemented basic player, camera, and dung mechanics',
  'Game Systems (48h): Added UI, effects, and core gameplay features',
  'Polish and Bug Fixes (72h): Final touches and performance optimization'
]

const challengeAndSolution = {
  challenge: 'Implementing a flexible and intuitive spell-casting system, Implementing accurate ball-in-polygon detection for spell effects',
  solution: 'Developed a custom polygon recognition algorithm combined with Unity\'s physics system for dynamic spell effects, Transitioned from ray-casting to the winding number algorithm for improved precision'
}

const learningOutcome = 'Deepened understanding of game physics, procedural generation, and the importance of iterative design based on player feedback'

const links = {
  demo: 'https://ldjam.com/events/ludum-dare/56/dungball-domination',
  source: 'https://github.com/minnnpan/ShiKeLang'
}

const gameFlowDiagram = ref(`
graph TD
    A[Player Input] -->|Move| B[Beetle Movement]
    B -->|SpaceKey| C[Leave Dung Trail]
    C -->|CheckSize| D[Update Ball Size]
    D -->|CollectDung| E[Increase Size]
    E --> A
    D -->|CheckCoverage| F[Win Condition]
    B -->|CheckCollision| G[Footstep Detection]
    G -->|Hit| H[Game Over]
    D -->|TooSmall| I[Game Over]
`)

const codeSnippets = [
  {
    title: 'Beetle Movement',
    code: `void UpdateMovement(Vector2 input) {
    // Calculate movement direction
    Vector2 direction = input.normalized;
    // Move beetle and attached dung ball
    transform.position += direction * speed * Time.deltaTime;
    dungBall.UpdatePosition(transform.position);
}`,
    language: 'csharp'
  },
  {
    title: 'Dung Trail',
    code: `void LeaveDungTrail() {
    if (Input.GetKey(KeyCode.Space) && dungBall.size > minSize) {
        // Create dung trail based on ball size
        float radius = dungBall.size * trailMultiplier;
        PaintDungOnGround(transform.position, radius);
        // Reduce ball size
        dungBall.DecreaseSize(decreaseRate * Time.deltaTime);
    }
}`,
    language: 'csharp'
  },
  {
    title: 'Coverage Check',
    code: `bool CheckWinCondition() {
    // Calculate current coverage percentage
    float coverage = GetDungCoverage();
    // Check if reached target coverage
    return coverage >= targetCoveragePercent;
}`,
    language: 'csharp'
  }
]

const keyAlgorithms = [
  {
    title: 'Dung Coverage',
    code: `float CalculateDungCoverage() {
    int totalPixels = groundTexture.width * groundTexture.height;
    int coveredPixels = 0;
    
    // Count pixels covered by dung
    Color[] pixels = groundTexture.GetPixels();
    foreach (Color pixel in pixels) {
        if (pixel.a > 0.5f) coveredPixels++;
    }
    
    return (float)coveredPixels / totalPixels * 100f;
}`,
    language: 'csharp'
  },
  {
    title: 'Collision Detection',
    code: `void CheckFootstepCollision(Vector2 footPosition) {
    float distance = Vector2.Distance(transform.position, footPosition);
    if (distance < (dungBall.size + footSize) * 0.5f) {
        // Game over if stepped on
        GameManager.Instance.GameOver();
    }
}`,
    language: 'csharp'
  }
]

const openLink = (url) => {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="items-center">
    <BlogTitle :title="title" />
    <BlogIntro :items="items" :intro="intro" />

    <div class="blog-main-container">
      <BlogImage :image="MainBG" />

      <div class="mt-8">
        <h2>Game Jam Results</h2>
        <BlogBody>
          <div class="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 class="text-lg font-semibold mb-3">Ludum Dare 56 Rankings</h4>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="bg-white p-4 rounded-lg text-center">
                <div class="text-2xl font-bold text-primary">Top 16.8%</div>
                <div class="text-sm text-gray-600">Overall</div>
              </div>
              <div class="bg-white p-4 rounded-lg text-center">
                <div class="text-2xl font-bold text-primary">Top 12.5%</div>
                <div class="text-sm text-gray-600">Fun</div>
              </div>
              <div class="bg-white p-4 rounded-lg text-center">
                <div class="text-2xl font-bold text-primary">Top 13%</div>
                <div class="text-sm text-gray-600">Innovation</div>
              </div>
              <div class="bg-white p-4 rounded-lg text-center">
                <div class="text-2xl font-bold text-primary">Top 7.5%</div>
                <div class="text-sm text-gray-600">Theme</div>
              </div>
              <div class="bg-white p-4 rounded-lg text-center">
                <div class="text-2xl font-bold text-primary">Top 13.5%</div>
                <div class="text-sm text-gray-600">Graphics</div>
              </div>
              <div class="bg-white p-4 rounded-lg text-center">
                <div class="text-2xl font-bold text-primary">Top 8.7%</div>
                <div class="text-sm text-gray-600">Audio</div>
              </div>
              <div class="bg-white p-4 rounded-lg text-center">
                <div class="text-2xl font-bold text-primary">Top 1.6%</div>
                <div class="text-sm text-gray-600">Humor</div>
              </div>
              <div class="bg-white p-4 rounded-lg text-center">
                <div class="text-2xl font-bold text-primary">Top 20%</div>
                <div class="text-sm text-gray-600">Mood</div>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <h4 class="text-lg font-semibold">Player Comments</h4>
            <div class="grid grid-cols-1 gap-4">
              <div class="bg-white p-4 rounded-lg border">
                <p class="italic">"OMG SO FUN I LOVE IT"</p>
              </div>
              <div class="bg-white p-4 rounded-lg border">
                <p class="italic">"Cool game, very fun. I really like your VFX; they add a lot of polish to the game. However, I encountered quite a few collision bugs when the player was in tight spaces, but it's a minor issue — I was able to get out of it. Overall, it's a good game ^^"</p>
              </div>
              <div class="bg-white p-4 rounded-lg border">
                <p class="italic">"It's fun. Very good dung Beetle simulator"</p>
              </div>
              <div class="bg-white p-4 rounded-lg border">
                <p class="italic">"I like this funny idea and of course the gold opening screen. The game was very easy to win, but I played it a few times for fun. For me personally, there wasn't enough variety in the game mechanics, but anyway, good job!"</p>
              </div>
            </div>
          </div>
        </BlogBody>
      </div>

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
        <div class="space-y-8">
          <!-- Code Snippets -->
          <div v-for="snippet in codeSnippets" :key="snippet.title">
            <CodeBlock 
              :code="snippet.code"
              :language="snippet.language"
              :title="snippet.title"
            />
          </div>

          <!-- Key Algorithms -->
          <div class="mt-8">
            <h3 class="font-bold text-xl mb-4">Key Algorithms</h3>
            <div class="space-y-6">
              <div v-for="algo in keyAlgorithms" :key="algo.title">
                <CodeBlock 
                  :code="algo.code"
                  :language="algo.language"
                  :title="algo.title"
                />
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
                <h3 class="font-bold text-xl mb-4">Game Jam Experience</h3>
                <p class="mt-2 mb-6 text-gray-700">
                  When the theme "Tiny Creature" was announced, our team immediately began brainstorming ideas. 
                  After considering various concepts like microscopic medicine adventures and ant colonies, we settled 
                  on the dung beetle concept for its unique gameplay potential and humorous appeal. The initial 8 hours 
                  were crucial for establishing our vision and dividing responsibilities among team members.
                </p>
              </div>

              <!-- 添加开发时间线 -->
              <div class="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 class="text-lg font-semibold mb-3">Development Timeline</h4>
                <div class="space-y-4">
                  <div>
                    <h5 class="font-semibold">First 24 Hours</h5>
                    <ul class="list-disc pl-6">
                      <li>Implemented basic player and camera controllers</li>
                      <li>Created dung ball physics and collection mechanics</li>
                      <li>Developed ground painting system for dung trails</li>
                      <li>Added win/lose conditions and core gameplay loop</li>
                    </ul>
                  </div>
                  <div>
                    <h5 class="font-semibold">24-48 Hours</h5>
                    <ul class="list-disc pl-6">
                      <li>Refined player controls and ball physics</li>
                      <li>Implemented UI systems and menus</li>
                      <li>Added coverage calculation and display</li>
                      <li>Integrated footstep mechanics</li>
                    </ul>
                  </div>
                  <div>
                    <h5 class="font-semibold">Final 24 Hours</h5>
                    <ul class="list-disc pl-6">
                      <li>Added visual effects and animations</li>
                      <li>Implemented sound effects and feedback</li>
                      <li>Bug fixing and performance optimization</li>
                      <li>Final polish and submission preparation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Playtesting and Iteration -->
            <div class="space-y-6">
              <div>
                <h3 class="font-bold text-xl">Playtesting and Iteration</h3>
                <p class="mt-2 mb-6 text-gray-700">
                  During the game jam rating time, I actively collected player feedback and quickly iterated on the game design. 
                  One particularly valuable piece of feedback led to a significant improvement in the game's mechanics.
                </p>
              </div>
              
              <div class="space-y-8">
                <!-- Feedback and Implementation -->
                <div class="bg-gray-50 rounded-lg p-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Player Suggestion -->
                    <div class="border-l-4 border-primary p-4 bg-white">
                      <h4 class="text-lg font-semibold mb-2">Player Suggestion</h4>
                      <p class="text-gray-700 italic">
                        "Completely funny, if there is a mode that makes the ball roll more and more bigger, it will be interesting"
                      </p>
                    </div>
                    
                    <!-- Implementation -->
                    <div class="border-l-4 border-green-500 p-4 bg-white">
                      <h4 class="text-lg font-semibold mb-2">Implementation & Reply</h4>
                      <p class="text-gray-700">
                        "Thanks a ton for playing the game and dropping your feedback! 🙌 Just wanted to let you know that we added a new feature based on your idea! The ball now gets smaller as it rolls but grows bigger when the beetle collects dungpiles. It’s a bit of a twist, but we think it adds a fun challenge! 😄 Hope you get a chance to check it out, and we’d love to hear what you think of the update!
                        Cheers"
                      </p>
                    </div>
                  </div>
                  
                  <div class="mt-6">
                    <img 
                      src="/images/DungBallDomination/DungBallGetsBig.gif"
                      alt="Before and after implementation comparison"
                      class="rounded-lg shadow-md mx-auto"
                      style="width: 480px; height: auto;"
                    />
                    <p class="mt-2 text-sm text-gray-600 text-center">
                      Before/After comparison of the dung ball size indicator implementation
                    </p>
                  </div>
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
            Dungball Domination achieved remarkable success in the Ludum Dare 56 game jam, ranking in the top 16.8% overall 
            and notably in the top 1.6% for Humor. The game successfully delivers:
          </p>
          <ul class="list-disc pl-6 space-y-2 mb-6">
            <li>A complete and polished game created within the 72-hour time constraint</li>
            <li>Unique and entertaining gameplay mechanics that effectively utilize the "Tiny Creature" theme</li>
            <li>Engaging visual style with smooth animations and satisfying feedback</li>
            <li>High replay value through dynamic gameplay elements</li>
          </ul>

          <h3 class="font-bold text-xl mb-4">Reflection</h3>
          <p class="mb-6">
            Participating in Ludum Dare 56 was an intense and rewarding experience. Working under extreme time pressure 
            taught valuable lessons about rapid prototyping, efficient decision-making, and team coordination. The project's 
            success in the humor category validated our creative direction and demonstrated the importance of maintaining a 
            clear vision even under tight deadlines.
          </p>
        </BlogBody>
      </div>

      <!-- <div class="mt-8">
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
      </div> -->

      <div class="flex justify-between mt-6">
        <Button @click="openLink(links.demo)">
          Play Demo
        </Button>
        <Button @click="openLink(links.source)" variant="outline">
          View Source Code
        </Button>
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