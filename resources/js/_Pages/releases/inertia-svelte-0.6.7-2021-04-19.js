import Layout from '@/Components/Layout'

const meta = {
  title: 'inertia-svelte@v0.6.7',
}

const Page = () => {
  return (
    <>
      <H1>inertia-svelte@v0.6.7</H1>
      <div className="-mt-8 mb-12 text-base font-medium text-gray-600">Published on April 19, 2021</div>
      - Fix issue with `processing` and `progress` form helper state ([#635](https://github.com/inertiajs/inertia/pull/635)).
    </>
  )
}

Page.layout = (page) => <Layout children={page} meta={meta} />

export default Page
