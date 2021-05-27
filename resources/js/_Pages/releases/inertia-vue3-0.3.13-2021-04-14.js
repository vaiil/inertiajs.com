import Layout from '@/Components/Layout'

const meta = {
  title: 'inertia-vue3@v0.3.13',
}

const Page = () => {
  return (
    <>
      <H1>inertia-vue3@v0.3.13</H1>
      <div className="-mt-8 mb-12 text-base font-medium text-gray-600">Published on April 14, 2021</div>
      - Remove dependency on deprecated `onBeforeRender` event ([#628](https://github.com/inertiajs/inertia/pull/628)).
    </>
  )
}

Page.layout = (page) => <Layout children={page} meta={meta} />

export default Page
