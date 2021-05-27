import Layout from '@/Components/Layout'

const meta = {
  title: 'inertia-laravel@v0.3.4',
}

const Page = () => {
  return (
    <>
      <H1>inertia-laravel@v0.3.4</H1>
      <div className="-mt-8 mb-12 text-base font-medium text-gray-600">Published on December 3, 2020</div>
      This release adds the ability to nest props using dot notation ([commit](https://github.com/inertiajs/inertia-laravel/commit/f316b80d55f51e0bf6f69803ddfb5aa14a142d8b)). This allows you to modify a globally shared prop from within a specific controller.
      ```php
      class ProjectsController
      {
          public function index()
          {
              return Inertia::render('Projects/Index', [
                  'projects' => Project::all(),

                  // Add a new permission check to the shared "auth.user" object for this endpoint.
                  'auth.user.can.create_projects' => Auth::user()->can('create', Project::class),
              ]);
          }
      }
      ```
    </>
  )
}

Page.layout = (page) => <Layout children={page} meta={meta} />

export default Page
