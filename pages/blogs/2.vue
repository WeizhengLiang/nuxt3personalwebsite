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
  'Technical Implementation: Overcame challenges in polygon detection algorithms',
  'Visual and Audio Integration: Blended custom assets with Unity Asset Store elements',
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
      </div>

      <!-- Placeholder for gameplay video -->
      <div class="my-4">
        [Placeholder: Short gameplay video showcasing pattern-based combat and neon aesthetics]
      </div>

      <div>
        <h2>Development Journey</h2>
        <BlogBody>
          <ul class="list-disc pl-5">
            <li v-for="step in developmentProcess" :key="step" class="mb-2">
              {{ step }}
            </li>
          </ul>
        </BlogBody>
      </div>

      <div>
        <h2>Key Challenge & Solution</h2>
        <BlogBody>
          <p><strong>Challenge:</strong> {{ challengeAndSolution.challenge }}</p>
          <p><strong>Solution:</strong> {{ challengeAndSolution.solution }}</p>
        </BlogBody>
      </div>

      <!-- Placeholder for before/after comparison image -->
      <div class="my-4">
        [Placeholder: Before/After image comparing ray-casting and winding number algorithm results]
      </div>

      <div>
        <h2>Learning Outcome</h2>
        <BlogBody>
          <p>{{ learningOutcome }}</p>
        </BlogBody>
      </div>

      <div class="flex justify-between mt-6">
        <Button @click="window.open(links.demo, '_blank')">
          Play Demo
        </Button>
        <Button @click="window.open(links.source, '_blank')" variant="outline">
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