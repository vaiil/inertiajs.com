import Layout from '@/Components/Layout'

const meta = {
  title: 'inertia@v0.1.9',
}

const Page = () => {
  return (
    <>
      <H1>inertia@v0.1.9</H1>
      <div className="-mt-8 mb-12 text-base font-medium text-gray-600">Published on April 30, 2020</div>
      - Upgrade types for lazy `preserveScroll` & `preserveState`.
    </>
  )
}

Page.layout = (page) => <Layout children={page} meta={meta} />

export default Page
