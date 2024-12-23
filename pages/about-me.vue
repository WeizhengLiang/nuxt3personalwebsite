<script setup>
import { BookUser, Check, CreditCard, Truck, AArrowDown } from 'lucide-vue-next'
import { ref } from 'vue'
import Introduction from './introduction.vue';

const steps = [{
  step: 1,
  title: 'Rutgers University',
  description: 'Computer Science',
  icon: AArrowDown,
}, {
  step: 2,
  title: 'The University of Hong Kong',
  description: 'Computer Science',
  icon: Truck,
}, {
  step: 3,
  title: 'Zhanxun Network Technology',
  description: 'Game Development',
  icon: CreditCard,
}, {
  step: 4,
  title: 'Freelance',
  description: 'Game Development',
  icon: Check,
}]

// const currentType = ref(window.innerWidth < 700 ? 'vertical' : 'horizontal')
</script>

<template>
    <div>
        <Introduction />

        <div class="mt-4">
            <Stepper :default-value="4">
                <StepperItem
                v-for="item in steps"
                :key="item.step"
                class="basis-1/4"
                :step="item.step"
                >
                <StepperTrigger>
                    <StepperIndicator>
                    <component :is="item.icon" class="w-4 h-4" />
                    </StepperIndicator>
                    <div class="flex flex-col">
                    <StepperTitle>
                        <span class="text-base">{{ item.title }}</span>
                    </StepperTitle>
                    <StepperDescription>
                        {{ item.description }}
                    </StepperDescription>
                    </div>
                </StepperTrigger>
                <StepperSeparator
                    v-if="item.step !== steps[steps.length - 1].step"
                    class="w-full h-px"
                />
                </StepperItem>
            </Stepper>
        </div>
    </div>
</template>