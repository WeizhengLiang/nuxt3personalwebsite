<script setup>
const title = {
    title: 'Why Do Cats & Dogs ...?',
    date: 'October 2023',
    image: '/images/back.jpg'
}
const items = [
    {type: 'Client', text: ['Cæmpus']},
    {type: 'Categories', text: ['Design', 'Professional', 'Static']},
    {type: 'Tools', text: ['d3.js']},
]
const intro = 'ACE was preparing for the soft launch of their rebrand to Cæmpus. They tasked me with analyzing data from the past decade (and beyond), during which they supported academic entrepreneurs in starting and growing their companies. My goal was to identify trends and interesting patterns that could be shared with the audience at the event. Additionally, during the event we highlighted the gaps in the existing data, emphasizing the importance of contributions from the community to ensure that future entrepreneurs can benefit from the collective experience.'

const image1 = {
    url: '/images/back.jpg',
    des: `Original designs, including the 'bubble pack', 'sentence tree' structure, and comparison of the general and 'my' top questions`
}
</script>

<template>
    <div class="items-center">
        <BlogTitle :title="title"   />
        <BlogIntro :items="items" :intro="intro" />

        <div class="blog-main-container">
            <BlogImage :image="image1" />

            <div>
                <h2>The idea</h2>
                <BlogBody>
                    Regular text, <strong>bold text</strong>, <em>italic text</em>,
                        and <a href="https://example.com">a link</a>.
                </BlogBody>

                <BlogBody>
                    I think it was October 2018 when Alberto Cairo reached out to me. If I was interested in doing another collaboration with Google News Lab (or Google Trends, I’m still not sure (*^▽^*)ゞ ). In 2017 I had created Beautiful in English with them as part of Data Sketches, which was exactly the kind of project I love to create; a fixed dataset (that wasn’t freely available on the web), a creative license to make visually appealing graphs, and combine it all into a story. So I was very much looking forward to doing another project with them!
                </BlogBody>
            </div>

            <BlogImage :image="image1" />

            <div>
                <h2>Design System + Figma Transition</h2>
                <BlogBody>
                    Regular text, <strong>bold text</strong>, <em>italic text</em>,
                        and <a href="https://example.com">a link</a>.
                </BlogBody>

                <BlogBody>
                    I think it was October 2018 when Alberto Cairo reached out to me. If I was interested in doing another collaboration with Google News Lab (or Google Trends, I’m still not sure (*^▽^*)ゞ ). In 2017 I had created Beautiful in English with them as part of Data Sketches, which was exactly the kind of project I love to create; a fixed dataset (that wasn’t freely available on the web), a creative license to make visually appealing graphs, and combine it all into a story. So I was very much looking forward to doing another project with them!
                </BlogBody>
            </div>

            <BlogImage :image="image1" />

            <div>
                <h2>Loyalty Program</h2>
                <BlogBody>
                    Regular text, <strong>bold text</strong>, <em>italic text</em>,
                        and <a href="https://example.com">a link</a>.
                </BlogBody>

                <BlogBody>
                    I think it was October 2018 when Alberto Cairo reached out to me. If I was interested in doing another collaboration with Google News Lab (or Google Trends, I’m still not sure (*^▽^*)ゞ ). In 2017 I had created Beautiful in English with them as part of Data Sketches, which was exactly the kind of project I love to create; a fixed dataset (that wasn’t freely available on the web), a creative license to make visually appealing graphs, and combine it all into a story. So I was very much looking forward to doing another project with them!
                </BlogBody>
            </div>

            <BlogImage :image="image1" />
       
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