import data from '../data/data.json';

const Programs = () => {
  return (
        <section className="bg-[#9D1C45] py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-white text-3xl text-center font-bold mb-8">{data.homepage.programs.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {data.homepage.programs.items.map((program, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4 hover:shadow-lg hover:scale-[1.02] transition-transform duration-300"
                >
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-20 h-20 object-contain rounded-[50%] bg-[#FFFF]"
                  />
                  <div>
                    <h3 className="text-black font-bold text-lg mb-2">
                      {program.title}
                    </h3>
                    <p className="text-black text-sm">{program.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="/programs"
                className="text-white font-semibold flex items-center px-10 justify-end gap-2 hover:underline"
              >
                View More <span>→</span>
              </a>
            </div>
          </div>
        </section>
        );
};

export default Programs;