import { EducationImage } from "shared/assets/images";

export const bannerInfo = {
  title: 'Педагог высшего образования по программам подготовки кадров высшей квалификации',
  subtitle: 'Курс повышения квалификации',
  buttons: [
    {
      title: 'Записаться на курс',
      variant: 'contained' as const,
    },
    {
      title: 'Консультация',
      variant: 'outlined' as const,
    },
  ],
  image: EducationImage,
  info: [
    {
      title: '8',
      subtitle: 'модулей',
      description: 'доступно к изучению сразу после оплаты',
    },
    {
      title: '244',
      subtitle: 'слушателей',
      description: 'прошли данный курс и получили диплом',
    },
    {
      title: '250 - 1400',
      subtitle: 'академических часов',
      description: 'длительность обучения от 2 месяцев до 1 года',
    },
  ],
};
