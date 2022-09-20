export default function Card() {
    return (
      <div className="bg-white pt-16 lg:py-20">
        <div className="pb-16 bg-gray-800 lg:pb-0 lg:z-10 lg:relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="relative lg:-my-8">
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                  <img
                    className="object-cover lg:h-full lg:w-full"
                    src="https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                <blockquote>
                  <div>
                    <p className="mt-6 text-2xl font-medium text-white">
                      Je suis un jeune développeur web qui aime la programmation web et plus particulièrement son aspect Front-End, j'ai commencé en javascript natif et je suis actuellement en train de poursuivre mon apprentissage grâce à la librarie ReactJS
                    </p>
                  </div>
                  <footer className="mt-6">
                  <p className="text-base font-medium text-white">- Loick T</p>
                    <p className="text-base font-medium text-indigo-100">Retrouvez mes projets ci-dessous ↓	</p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
