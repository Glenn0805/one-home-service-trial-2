import { motion } from "framer-motion";
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2 },
  },
};

const imageVariants = {
  hidden: { scale: 0.9 },
  visible: {
    scale: 1,
    transition: { duration: 0.5, delay: 0.3 },
  },
};

const companies = [
  {
    rank: 3,
    name: "Master Touch Outdoor Living",
    address: "11860 Wiles Rd, Coral Springs, FL 33076",
    rating: 4.9,
    reviews: 478,
    logo: "/one-home-service-trial-2/master.png",
    badge: "https://via.placeholder.com/50x50?text=3",
  },
  {
    rank: 1,
    name: "Bella Pools Of South Florida",
    address: "21113 Johnson St #103, Pembroke Pines, FL 33029, United States",
    rating: 5.0,
    reviews: 146,
    logo: "/one-home-service-trial-2/bella.jpg",
  },
  {
    rank: 2,
    name: "Paramount Pool Services Company",
    address: "21113 Johnson St #103, Pembroke Pines, FL 33029, United States",
    rating: 4.8,
    reviews: 20,
    logo: "/one-home-service-trial-2/paramount.png",
  },
];

const ModernCardSection = () => {
  return (
    <section className="bg-white">
      <motion.div
        className="relative h-64 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/one-home-service-trial-2/pool.webp')", // Replace with your image URL
        }}
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-[#324154]/70 flex flex-col items-center justify-center">
          <motion.h1
            className="text-[#ffff] font-medium text-3xl md:text-4xl tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Pool Build/Repair
          </motion.h1>
          <motion.p
            className="text-[#3A82F6] text-sm mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            Quality and excellence in every project
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        className="container mx-auto px-4 py-8 bg-white"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-3xl font-bold text-[#324154] text-center mb-8"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          Top Companies
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Image Section */}
              <motion.img
                src={company.logo}
                alt={company.name}
                className="w-full h-40 object-cover"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
              />

              {/* Card Content */}
              <div className="p-4">
                <motion.h3
                  className="text-xl font-semibold text-[#324154] mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  {company.name}
                </motion.h3>
                <p className="text-sm text-gray-500 mb-4">{company.address}</p>

                {/* Badge */}
                {company.badge && (
                  <div className="mb-4 flex items-center">
                    <img
                      src={company.badge}
                      alt="Rank Badge"
                      className="w-6 h-6 mr-2"
                    />
                    <span className="text-sm text-gray-600">Top Ranked</span>
                  </div>
                )}

                {/* Rating and CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-[#3A82F6] font-bold text-lg">
                      {company.rating}
                    </span>
                    <span className="text-yellow-500 text-lg ml-1">★</span>
                    <span className="text-sm text-gray-500 ml-2">
                      ({company.reviews} Reviews)
                    </span>
                  </div>
                  <a
                    href="#"
                    className="text-[#3A82F6] font-medium hover:underline"
                  >
                    Contact Now →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ModernCardSection;
