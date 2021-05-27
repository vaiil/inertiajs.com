import Layout from '@/Components/Layout'

const meta = {
  title: 'inertia-svelte@v0.6.4',
}

const Page = () => {
  return (
    <>
      <H1>inertia-svelte@v0.6.4</H1>
      <div className="-mt-8 mb-12 text-base font-medium text-gray-600">Published on April 3, 2021</div>
      - Fix bug when creating a form helper without any data ([#601](https://github.com/inertiajs/inertia/pull/601)).
    </>
  )
}

Page.layout = (page) => <Layout children={page} meta={meta} />

export default Page
