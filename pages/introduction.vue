<script setup>
</script>

<template>
    <div class="about-me-container lg:p-8 p-4 text-zinc-50">
        <div class="lg:w-[350px] text-justify">
            <h2>About me</h2>
            <p class="my-4 text-zinc-50">One year ago, I graduated at Rutgers University - New Brunswick. I worked as a game developer, creating games for fun and passion.</p>
            <p class="my-4 text-zinc-50">Enjoy coding, gaming and playing with my lovely cat</p>
            <p class="my-4 text-zinc-50">Here is my 
                <NuxtLink 
                    to="/resume" 
                >
                    <Button variant="secondary" size="xs">
                    resume
                    </Button>
                </NuxtLink>
            </p>
        </div>
    </div>
</template>

<style lang="css" scoped>
.about-me-container {
    position: relative;
    height: 40vw;
    max-height: 450px;
}

.about-me-container::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: 
        linear-gradient(
            to right,
            rgba(30, 27, 75, 0.1),
            rgba(30, 27, 75, 0.3),
            rgba(30, 27, 75, 0.8)
        ),
        url("@/public/images/self_image3.png");
    background-color: rgba(30, 27, 75, 0.3); /* 蓝色半透明 */
    background-blend-mode: multiply; /* 可以尝试：overlay, soft-light, color, screen 等 */
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transform: scaleX(-1);
    z-index: -1;

    border-radius: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>