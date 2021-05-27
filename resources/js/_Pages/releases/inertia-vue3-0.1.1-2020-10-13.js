import Layout from '@/Components/Layout'

const meta = {
  title: 'inertia-vue3@v0.1.1',
}

const Page = () => {
  return (
    <>
      <H1>inertia-vue3@v0.1.1</H1>
      <div className="-mt-8 mb-12 text-base font-medium text-gray-600">Published on October 13, 2020</div>
      - Add new `App` and `Link` named exports.
    </>
  )
}

Page.layout = (page) => <Layout children={page} meta={meta} />

export default Page
