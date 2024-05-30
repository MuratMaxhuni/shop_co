import Carousel from './Carousel';
const DATA = [
  { image: 'https://picsum.photos/seed/random101/500/500' },
  { image: 'https://picsum.photos/seed/random102/500/500' },
  { image: 'https://picsum.photos/seed/random103/500/500' },
  { image: 'https://picsum.photos/seed/random101/500/500' },
  { image: 'https://picsum.photos/seed/random102/500/500' },
  { image: 'https://picsum.photos/seed/random103/500/500' },
];

const data: Array<TestimonialType> = [
  {
    id: '1',
    description:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    name: 'Sarah M.',
    rating: 4.5,
    verified_customer: true,
  },
  {
    id: '2',
    description:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    name: 'Sarah M.',
    rating: 5,
    verified_customer: true,
  },
  {
    id: '3',
    description:
      'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.',
    name: 'Alex K.',
    rating: 5,
    verified_customer: true,
  },
  {
    id: '4',
    description:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    name: 'James L.',
    rating: 5,
    verified_customer: true,
  },
  {
    id: '5',
    description:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    name: 'Mooen',
    rating: 4.5,
    verified_customer: true,
  },
];

const Testimonials = () => {
  return (
    <section>
      <div className="px-4 md:px-8 lg:px-11 xl:px-[6.25rem] 2xl:px-[6.25vw]">
        <Carousel data={data} />
      </div>
    </section>
  );
};

export default Testimonials;
