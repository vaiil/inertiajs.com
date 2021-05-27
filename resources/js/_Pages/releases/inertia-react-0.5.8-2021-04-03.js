import Layout from '@/Components/Layout'

const meta = {
  title: 'inertia-react@v0.5.8',
}

const Page = () => {
  return (
    <>
      <H1>inertia-react@v0.5.8</H1>
      <div className="-mt-8 mb-12 text-base font-medium text-gray-600">Published on April 3, 2021</div>
      - Fix bug when using hot module replacement ([#599](https://github.com/inertiajs/inertia/pull/599)).
    </>
  )
}

Page.layout = (page) => <Layout children={page} meta={meta} />

export default Page
