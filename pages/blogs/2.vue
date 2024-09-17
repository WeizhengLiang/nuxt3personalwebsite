<script setup>
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import polyspell_img from '@/public/images/qudrilateral_form.png'

const title = {
    title: 'PolySpell: Where Shapes Cast Spells',
    date: 'August 2024',
    image: polyspell_img
}

const items = [
    {type: 'Development Time', text: ['June-August 2024']},
    {type: 'Tech Stack', text: ['Unity', 'C#']},
    {type: 'Role', text: ['Solo Developer']},
    {type: 'Genre', text: ['Puzzle Strategy']},
]

const intro = 'PolySpell is a unique puzzle game that blends shape-based spell casting with strategic combat. As a solo developer, I created this game to challenge players\' creativity and problem-solving skills in a vibrant, magical world.'

const gameImage = {
    url: polyspell_img,
    des: 'PolySpell gameplay screenshot: Bob creating a polygonal trail to cast a spell'
}

const coreFeatures = [
  'Pattern-Based Combat: Create polygonal trails to trigger various magical effects',
  'Strategic Energy Management: Balance spell-casting with energy conservation',
  'Vibrant Neon Aesthetic: Immerse yourself in a colorful, fast-paced world',
  'Dynamic Difficulty: Face evolving challenges as you progress'
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
</script>

<template>
  <div class="items-center">
    <BlogTitle :title="title" />
    <BlogIntro :items="items" :intro="intro" />

    <div class="blog-main-container">
      <BlogImage :image="gameImage" />

      <div>
        <h2>Core Features</h2>
        <BlogBody>
          <ul class="list-disc pl-5">
            <li v-for="feature in coreFeatures" :key="feature" class="mb-2">
              {{ feature }}
            </li>
          </ul>
        </BlogBody>
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
</style>