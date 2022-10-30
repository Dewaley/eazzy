import Questions from "../Question/Questions";

const FAQs = () => {
  const questions = [
    {
      question: "What is Eazzy?",
      answer:
        "Eazzy is a digital farmers market that enables food businesses and individuals in Africa to buy fresh food items and groceries, instantly or on a schedule.",
    },
    {
      question: "When are your operating hours?",
      answer: "We currently operate 9am-9pm, Daily.",
    },
    {
      question: "Do you accept payment on delivery?",
      answer:
        "No, But even better. We are all about the easy life, who needs cash when you can pay “eazzily” via payment links, USSD, debit cards, & a fundable in-app wallet.",
    },
    {
      question: "Can I order instantly?",
      answer:
        "At the moment you can only pre-order items and have it delivered on a schedule that works for you.",
    },
    {
      question: "What is your delivery time window?",
      answer:
        "Since we currently offer pre-orders only, you are guaranteed to receive your items quickly using your selected date and time.",
    },
    {
      question: "When will instant orders be available?",
      answer:
        "Instant orders will be available to our users in December, having access to explore a diverse range of food categories, and even at better prices. ",
    },
    {
      question: "What is your pricing like?",
      answer:
        "Food items sold on Eazzy are priced fairly and favourable when compared to market prices, thanks to our partner farmers and suppliers.",
    },
    {
      question: "What are your delivery rates?",
      answer: "Depending on your location it ranges from N350-1000.",
    },
    {
      question: "Is Eazzy a food delivery service?",
      answer:
        "No. But even better, buy everything you need to make a meal all in one place!",
    },
    {
      question: "How can I guarantee the quality of food items on Eazzy?",
      answer:
        "We adopt a Farm to Table approach, by establishing strict quality control policies with our farm partners, and carefully inspecting the items before they get to you.",
    },
    {
      question: "How can I guarantee the quantity of items sold to me?",
      answer:
        "At Eazzy, excellence and transparency are our core values.We use the respective unit of measurements you are familiar with, whether you’re shopping for your family or procuring items for your food business.",
    },
  ];

  return (
    <div className='px-3 flex flex-col items-center gap-12'>
      <h3 className='text-2xl font-medium text-center'>
        Frequently Asked Questions
      </h3>
      <div className='lg:w-[60vw] flex flex-col gap-2'>
        {questions.map((item, index) => (
          <Questions
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQs;
