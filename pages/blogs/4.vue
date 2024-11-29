<script setup>
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import CodeBlock from '@/components/ui/code-block'

const MainBG = {
  url: '/images/MCS/MCS_004.gif'
}

const wukongBG = {
  url: '/images/MCS/wukong.png'
}

const title = {
  title: 'Melee Combat System',
  date: 'Nov 2024',
  image: MainBG.url
}

const items = [
  {type: 'Development Time', text: ['Sep - Nov 2024']},
  {type: 'Tech Stack', text: ['C#', 'Unity']},
  {type: 'Role', text: ['Solo Developer']},
  {type: 'Genre', text: ['Action']},
]

const intro = 'My journey into combat system development began with an inspiring moment - watching the reveal of "Black Myth: WuKong". As a long-time fan of the WuKong character in Chinese traditional culture, seeing this beloved character brought to life in a AAA game sparked my curiosity about combat system development. This curiosity evolved into a dedicated learning project, laying the groundwork for potentially larger game development endeavors.'

// 1. Key Features
const keyFeatures = [
  {
    title: 'Dynamic Combo System',
    description: 'A fast-paced, time-sensitive three-hit combo system that seamlessly transitions from light to heavy attacks, rewarding precise timing and skillful execution.',
    media: {
      url: '/images/MCS/MCS_003.gif',
      des: 'Combo System gameplay demonstration'
    }
  },
  {
    title: 'Strategic Attack State Design',
    description: 'A meticulously crafted three-phase attack system—Anticipation, Impact, and Recovery—that delivers a rhythmic and engaging combat flow, balancing strategy and intensity.',
    media: {
      url: '/images/MCS/attack_state.png',
      des: 'Attack State Design'
    }
  },
  {
    title: 'Precise Hit Detection System',
    description: 'An animation-driven hit detection framework that accurately maps weapon trajectories and calculates hit trails for unparalleled combat precision.',
    code: true
  },
  {
    title: 'Robust Editor Tools',
    description: 'Custom-built Unity editor tools that empower developers with an intuitive and efficient setup process for characters, weapons, and attack configurations.',
    media: {
      url: '/images/MCS/editor_window.png',
      des: 'Editor Tools'
    }
  }
  // ... 更多特性
]

// 2. Technical Implementation
const codeSnippets = [
  {
    title: '[功能1]',
    code: `[代码片段1]`,
    language: 'cs'
  },
  // ... 更多代码片段
]

const keyAlgorithms = [
  {
    title: '[算法1]',
    code: `[算法实现代码]`,
    language: 'cs'
  },
  // ... 更多算法
]

// 3. Core Features Deep Dive
const coreFeatures = [
  {
    title: '[核心功能1]',
    description: '[详细描述]',
    implementation: '[实现细节]',
    media: {
      url: '/images/Project3/core1.gif',
      des: '[功能演示]'
    }
  },
  // ... 更多核心功能
]

// 4. Development Journey
const developmentStages = [
  {
    stage: '规划阶段',
    duration: '[时间段]',
    description: '[描述]',
    challenges: ['[挑战1]', '[挑战2]'],
    solutions: ['[解决方案1]', '[解决方案2]']
  },
  // ... 更多开发阶段
]

// 5. Learning Outcomes
const learningOutcomes = [
  {
    area: '[学习领域1]',
    details: '[具体收获]'
  },
  // ... 更多学习成果
]

// 6. Future Development
const futurePlans = [
  {
    feature: '[计划功能1]',
    description: '[详细说明]',
    priority: 'High'
  },
  // ... 更多未来计划
]

const links = {
  demo: 'https://github.com/WeizhengLiang/melee-combat-system/releases/tag/v0.1',
  source: 'https://github.com/WeizhengLiang/melee-combat-system/tree/main'
}

const openLink = (url) => {
  window.open(url, '_blank')
}

const systemArchitectureDiagram = ref(`
graph TB
    subgraph Input System
        IM[InputManager]
        MCI[MeleeCombatInput]
        IM --> MCI
        MCI --> |Attack Input| ATK[Attack Detection]
        MCI --> |Combat Input| COM[Combo Management]
        MCI --> |Weapon Input| WPN[Weapon Toggle]
        MCI --> |Defense Input| DEF[Block/Dodge]
    end

    subgraph Combat System
        MCS[MeleeCombatSystem]
        WM[WeaponManager]
        DH[DamageHandler]
        MCS --> WM
        MCS --> DH
    end

    subgraph Animation System
        RC[RPGCharacterController]
        AE[AnimationEvents]
        RC --> |Triggers| AE
        AE --> |Combat States| CS[Combat Animations]
        AE --> |Transitions| TR[State Transitions]
        AE --> |Hit Events| HE[Hit Detection]
    end

    subgraph UI System
        CUI[CombatUIManager]
        CUI --> |Display| SD[State Display]
        CUI --> |Debug| AD[Animation Debug]
        CUI --> |Controls| NC[NPC Interface]
    end

    %% System Interactions
    MCI --> |Combat Commands| MCS
    MCS --> |State Changes| RC
    AE --> |Feedback| CUI
    
    %% Event Communication
    WM --> |OnWeaponToggle| RC
    MCS --> |OnAttackStart| RC
    AE --> |OnHitDetection| DH
    DH --> |OnDamageDealt| CUI
`)

const attackSequenceDiagram = ref(`
sequenceDiagram
    participant P as Player/NPC
    participant IM as InputManager
    participant MCI as MeleeCombatInput
    participant RC as RPGCharacterController
    participant MCS as MeleeCombatSystem
    participant AC as AnimationController
    participant ES as EventSystem
    participant DH as DamageHandler
    participant CUI as CombatUIManager

    P->>IM: Press Attack Button (J)
    IM->>MCI: HandleAttackInput()
    MCI->>RC: CanStartAction(Attack)
    RC-->>MCI: true/false
    MCI->>MCS: PerformAttack(animNumber, attackLevel)
    MCS->>AC: Play Attack Animation
    AC->>ES: OnAttackStart
    AC->>ES: OnHitDetection
    ES->>DH: Calculate Damage
    DH->>CUI: Update Combat UI
`)

const weaponSwitchSequenceDiagram = ref(`
sequenceDiagram
    participant P as Player/NPC
    participant IM as InputManager
    participant MCI as MeleeCombatInput
    participant RC as RPGCharacterController
    participant WM as WeaponManager
    participant AC as AnimationController
    participant CUI as CombatUIManager

    P->>IM: Press Weapon Toggle (U)
    IM->>MCI: OnWeaponToggle
    MCI->>RC: CanStartAction(SwitchWeapon)
    RC-->>MCI: true/false
    MCI->>WM: Switch Weapon
    WM->>AC: Play Switch Animation
    AC->>CUI: Update Weapon Display
`)

const hitDetectionCode = ref(`private void Update()
{
    if (isInImpactPhase)
    {
        DetectHit(attackHandler.CurrentAttackSide);
    }
}

private void DetectHit(Side attackSide)
{
    EnsureHitTargetCollection();
    
    var weaponInfo = GetCurrentWeaponInfo(attackSide);
    foreach (var attackPoint in weaponInfo.attackPoints)
    {
        CheckHitAtPoint(attackPoint, weaponInfo.attackRadius, weaponInfo.weapon);
    }
}

private void EnsureHitTargetCollection()
{
    if (!hitTargets.ContainsKey(currentAttackId))
    {
        hitTargets[currentAttackId] = new HashSet<IDamageable>();
    }
}

private (Weapon weapon, List<Transform> attackPoints, float attackRadius) GetCurrentWeaponInfo(Side attackSide)
{
    Weapon weapon = (attackSide == Side.Left) ? characterController.leftWeapon : characterController.rightWeapon;
    return (weapon,
        weaponManager.GetAttackPoints(weapon),
        weaponManager.GetAttackRadius(weapon));
}

private void CheckHitAtPoint(Transform attackPoint, float attackRadius, Weapon weapon)
{
    var hitColliders = Physics.OverlapSphere(attackPoint.position, attackRadius);
    foreach (var hitCollider in hitColliders)
    {
        ProcessPotentialTarget(hitCollider, attackPoint.position, weapon);
    }
}`)

const showCodeModal = ref(false)
</script>

<template>
  <div class="items-center">
    <BlogTitle :title="title" />
    <BlogIntro :items="items" :intro="intro" />

    <div class="blog-main-container">
      <BlogImage :image="wukongBG" />

      <!-- 1. Key Features -->
      <BlogBody>
        <h2>Key Features</h2>
        <div class="grid grid-cols-2 gap-8">
          <div v-for="feature in keyFeatures" :key="feature.title" class="mb-8">
            <h3 class="font-bold">{{ feature.title }}</h3>
            <p class="mb-4">{{ feature.description }}</p>
            
            <!-- 根据特性类型显示图片或代码 -->
            <template v-if="feature.code">
              <div class="relative aspect-video bg-gray-900 rounded-lg overflow-hidden cursor-pointer" 
                   @click="showCodeModal = true">
                <div class="absolute inset-0 p-4">
                  <pre class="text-sm h-full overflow-hidden"><code class="language-csharp">{{ hitDetectionCode }}</code></pre>
                </div>
                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span class="text-white text-sm">Click to view full code</span>
                </div>
              </div>
            </template>
            <template v-else>
              <img 
                v-if="feature.media" 
                :src="feature.media.url" 
                :alt="feature.media.des"
                class="rounded-lg shadow-lg mx-auto"
                style="width: 480px; height: auto;"
              />
            </template>
          </div>
        </div>
      </BlogBody>

      <!-- 2. Technical Implementation -->
      <BlogBody>
        <h2>Technical Implementation</h2>
        <div class="space-y-8">
          <!-- System Architecture -->
          <div>
            <h3 class="font-bold text-xl mb-4">System Architecture</h3>
            <p class="mb-4">
              The combat system is built on four primary interconnected systems, each handling specific aspects of the gameplay experience:
            </p>
            
            <!-- Architecture Diagram -->
            <div class="bg-gray-50 rounded-lg p-6 mb-6">
              <vue-mermaid-string :value="systemArchitectureDiagram"></vue-mermaid-string>
            </div>

            <!-- System Descriptions -->
            <div class="space-y-6">
              <div>
                <h4 class="font-semibold text-lg">Input System</h4>
                <p class="text-gray-700">
                  Centralizes all input processing through the InputManager, which routes combat-specific inputs to the MeleeCombatInput component for specialized handling of attacks, combos, weapon toggles, and defensive actions.
                </p>
              </div>

              <div>
                <h4 class="font-semibold text-lg">Combat System</h4>
                <p class="text-gray-700">
                  The core gameplay logic resides in the MeleeCombatSystem, working in conjunction with the WeaponManager for equipment states and the DamageHandler for combat calculations.
                </p>
              </div>

              <div>
                <h4 class="font-semibold text-lg">Animation System</h4>
                <p class="text-gray-700">
                  Managed by the RPGCharacterController, this system handles all character animations and their associated events, ensuring smooth transitions between combat states and accurate hit detection.
                </p>
              </div>

              <div>
                <h4 class="font-semibold text-lg">UI System</h4>
                <p class="text-gray-700">
                  The CombatUIManager provides real-time feedback through combat state displays, debugging tools, and NPC interaction interfaces.
                </p>
              </div>
            </div>
          </div>

          <!-- Sequence Diagrams -->
          <div class="space-y-16">
            <h3 class="font-bold text-xl mb-4">Sequence Diagrams</h3>
            <p class="mb-4">
              The following sequence diagrams illustrate the key interactions between system components during combat actions:
            </p>
            
            <!-- Attack Sequence -->
            <div class="relative mb-24">
              <h4 class="font-semibold text-lg mb-2">1. Attack Sequence</h4>
              <p class="text-gray-700 mb-4">
                Demonstrates the flow of an attack action from input to damage calculation and UI updates:
              </p>
              <div class="bg-gray-50 rounded-lg p-6">
                <div class="mermaid-container" style="height: 360px;">
                  <vue-mermaid-string 
                    :value="attackSequenceDiagram"
                    :key="'attack-sequence'"
                  ></vue-mermaid-string>
                </div>
              </div>
            </div>

            <!-- Weapon Switch Sequence -->
            <!-- <div class="relative">
              <h4 class="font-semibold text-lg mb-2">2. Weapon Switch Sequence</h4>
              <p class="text-gray-700 mb-4">
                Shows the process of switching weapons and updating related systems:
              </p>
              <div class="bg-gray-50 rounded-lg p-6">
                <div class="mermaid-container" style="height: 330px;">
                  <vue-mermaid-string 
                    :value="weaponSwitchSequenceDiagram"
                    :key="'weapon-switch'"
                  ></vue-mermaid-string>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </BlogBody>

      <!-- 3. Core Features Deep Dive -->
      <!-- <BlogBody>
        <h2>Core Features Deep Dive</h2>
        <div class="space-y-8">
          <div v-for="feature in coreFeatures" :key="feature.title">
            <h3 class="font-bold text-xl">{{ feature.title }}</h3>
            <p class="mt-2 mb-4">{{ feature.description }}</p>
            <div class="bg-gray-50 rounded-lg p-6">
              <p class="text-gray-700">{{ feature.implementation }}</p>
              <img 
                v-if="feature.media"
                :src="feature.media.url"
                :alt="feature.media.des"
                class="mt-4 rounded-lg shadow-md mx-auto"
              />
            </div>
          </div>
        </div>
      </BlogBody> -->

      <!-- Technical Challenges (替换 Development Journey) -->
      <BlogBody>
        <h2>Technical Challenges</h2>
        <div class="space-y-8">
          <!-- Challenge 1: Animation-Driven Hit Detection -->
          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="font-bold text-xl mb-4">Animation-Driven Hit Detection</h3>
            
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-lg text-red-600">Problem</h4>
                <p class="text-gray-700">
                  Synchronizing hit detection with animation frames while maintaining performance.
                </p>
              </div>

              <div>
                <h4 class="font-semibold text-lg text-green-600">Solution</h4>
                <p class="text-gray-700 mb-2">
                  Developed an event-based hit detection system that:
                </p>
                <ul class="list-disc pl-6 space-y-2">
                  <li>Uses animation events for precise timing</li>
                  <li>Implements efficient collision detection</li>
                  <li>Manages weapon trail effects</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-lg text-blue-600">Result</h4>
                <p class="text-gray-700">
                  Accurate and performant hit detection system
                </p>
              </div>
            </div>
          </div>

          <!-- Challenge 2: Editor Workflow Optimization -->
          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="font-bold text-xl mb-4">Editor Workflow Optimization</h3>
            
            <div class="space-y-4">
              <div>
                <h4 class="font-semibold text-lg text-red-600">Problem</h4>
                <p class="text-gray-700">
                  Complex setup process for new characters and attack configurations.
                </p>
              </div>

              <div>
                <h4 class="font-semibold text-lg text-green-600">Solution</h4>
                <p class="text-gray-700 mb-2">
                  Created custom editor tools that:
                </p>
                <ul class="list-disc pl-6 space-y-2">
                  <li>Provide visual character setup interface</li>
                  <li>Offer intuitive attack point configuration</li>
                  <li>Automate component setup</li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-lg text-blue-600">Result</h4>
                <p class="text-gray-700">
                  Significantly reduced setup time for new characters and attacks
                </p>
              </div>
            </div>
          </div>
        </div>
      </BlogBody>

      <!-- 4. Development Journey -->
      <!-- <BlogBody>
        <h2>Development Journey</h2>
        <div class="space-y-8">
          <div v-for="stage in developmentStages" :key="stage.stage">
            <h3 class="font-bold text-xl">{{ stage.stage }}</h3>
            <div class="bg-gray-50 rounded-lg p-6 mt-4">
              <p class="mb-4">{{ stage.description }}</p>
              <div class="grid grid-cols-2 gap-6">
                <div>
                  <h4 class="font-semibold mb-2">Challenges</h4>
                  <ul class="list-disc pl-6">
                    <li v-for="challenge in stage.challenges" :key="challenge">
                      {{ challenge }}
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-semibold mb-2">Solutions</h4>
                  <ul class="list-disc pl-6">
                    <li v-for="solution in stage.solutions" :key="solution">
                      {{ solution }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BlogBody> -->

      <!-- 5. Learning Outcomes -->
      <BlogBody>
        <h2>Learning Outcomes</h2>
        <div class="space-y-8">
          <!-- Technical Skills -->
          <div>
            <h3 class="font-bold text-xl mb-4">Technical Skills Gained</h3>
            <div class="grid md:grid-cols-3 gap-6">
              <!-- Combat System Architecture -->
              <div class="bg-gray-50 rounded-lg p-6">
                <h4 class="font-semibold text-lg mb-3">Combat System Architecture</h4>
                <ul class="list-disc pl-4 space-y-2 text-gray-700">
                  <li>Modular system design</li>
                  <li>Event-driven architecture</li>
                  <li>State management patterns</li>
                </ul>
              </div>

              <!-- Unity Development -->
              <div class="bg-gray-50 rounded-lg p-6">
                <h4 class="font-semibold text-lg mb-3">Unity Development</h4>
                <ul class="list-disc pl-4 space-y-2 text-gray-700">
                  <li>Animation system (Mecanim)</li>
                  <li>Custom editor tool development</li>
                  <li>Event system implementation</li>
                </ul>
              </div>

              <!-- Game Design -->
              <div class="bg-gray-50 rounded-lg p-6">
                <h4 class="font-semibold text-lg mb-3">Game Design</h4>
                <ul class="list-disc pl-4 space-y-2 text-gray-700">
                  <li>Combat timing design</li>
                  <li>Player feedback systems</li>
                  <li>Game feel optimization</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Project Experience -->
          <div>
            <h3 class="font-bold text-xl mb-4">Project Experience</h3>
            <div class="bg-gray-50 rounded-lg p-6">
              <ul class="list-disc pl-6 space-y-2 text-gray-700">
                <li>Structured system development</li>
                <li>Technical documentation writing</li>
                <li>Combat mechanics implementation</li>
              </ul>
            </div>
          </div>
        </div>
      </BlogBody>

      <!-- 6. Future Development -->
      <BlogBody>
        <h2>Future Development</h2>
        <div class="space-y-8">
          <!-- Planned Features -->
          <div>
            <h3 class="font-bold text-xl mb-4">Planned Features</h3>
            <div class="grid md:grid-cols-3 gap-6">
              <!-- Combat System Enhancement -->
              <div class="bg-gray-50 rounded-lg p-6">
                <h4 class="font-semibold text-lg mb-3">Combat System Enhancement</h4>
                <ul class="list-disc pl-4 space-y-2 text-gray-700">
                  <li>Additional weapon types beyond unarmed and two-hand sword</li>
                  <li>More complex combo variations</li>
                  <li>Advanced blocking mechanics</li>
                </ul>
              </div>

              <!-- AI Combat Behaviors -->
              <div class="bg-gray-50 rounded-lg p-6">
                <h4 class="font-semibold text-lg mb-3">AI Combat Behaviors</h4>
                <ul class="list-disc pl-4 space-y-2 text-gray-700">
                  <li>NPC combat AI</li>
                  <li>Enemy behavior patterns</li>
                  <li>Dynamic difficulty adjustment</li>
                </ul>
              </div>

              <!-- System Extensions -->
              <div class="bg-gray-50 rounded-lg p-6">
                <h4 class="font-semibold text-lg mb-3">System Extensions</h4>
                <ul class="list-disc pl-4 space-y-2 text-gray-700">
                  <li>More character customization options</li>
                  <li>Additional animation sets</li>
                  <li>Enhanced visual effects</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Technical Improvements -->
          <div>
            <h3 class="font-bold text-xl mb-4">Technical Improvements</h3>
            <div class="grid md:grid-cols-2 gap-6">
              <!-- Performance Optimization -->
              <div class="bg-gray-50 rounded-lg p-6">
                <h4 class="font-semibold text-lg mb-3">Performance Optimization</h4>
                <ul class="list-disc pl-4 space-y-2 text-gray-700">
                  <li>Hit detection optimization</li>
                  <li>Animation system refinement</li>
                  <li>Memory management improvements</li>
                </ul>
              </div>

              <!-- Code Architecture -->
              <div class="bg-gray-50 rounded-lg p-6">
                <h4 class="font-semibold text-lg mb-3">Code Architecture</h4>
                <ul class="list-disc pl-4 space-y-2 text-gray-700">
                  <li>Enhanced modularity</li>
                  <li>Better event system</li>
                  <li>More flexible weapon system</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </BlogBody>

      <!-- Links -->
      <div class="flex justify-between mt-6 w-full max-w-6xl">
        <Button @click="openLink(links.demo)">
          Download Page
        </Button>
        <Button @click="openLink(links.source)" variant="outline">
          View Source Code
        </Button>
      </div>
    </div>
  </div>

  <!-- Code Modal -->
  <div v-if="showCodeModal" 
       class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
       @click="showCodeModal = false">
    <div class="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto" 
         @click.stop>
      <div class="flex justify-between items-center p-4 border-b border-gray-700">
        <h3 class="text-white font-bold">Hit Detection System Implementation</h3>
        <button class="text-gray-400 hover:text-white" 
                @click="showCodeModal = false">
          ×
        </button>
      </div>
      <div class="p-4">
        <pre class="!m-0"><code class="language-csharp">{{ hitDetectionCode }}</code></pre>
      </div>
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

.aspect-video {
  aspect-ratio: 16/9;
}

.mermaid-container {
  position: relative;
  width: 100%;
  overflow: visible;
}

/* 确保 Mermaid 图表不会溢出容器 */
:deep(.mermaid) {
  width: 100%;
  height: 100%;
}
</style>
