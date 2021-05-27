import Layout from '@/Components/Layout'

const meta = {
  title: 'inertia-react@v0.2.1',
}

const Page = () => {
  return (
    <>
      <H1>inertia-react@v0.2.1</H1>
      <div className="-mt-8 mb-12 text-base font-medium text-gray-600">Published on September 9, 2020</div>
      - Add `headers` prop to Inertia link component ([#204](https://github.com/inertiajs/inertia/pull/204)).
    </>
  )
}

Page.layout = (page) => <Layout children={page} meta={meta} />

export default Page
