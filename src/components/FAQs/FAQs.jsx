import Questions from "../Question/Questions";

const FAQs = () => {
  const questions = [
    {
      question: "What is Eazzy?",
      answer:
        "Eazzy is a digital marketplace that enables individuals and businesses to shop & procure fresh food items instantly and on a schedule.",
    },
  ];

  return (
    <div className='flex flex-col items-center my-4 gap-12'>
      <h3 className='text-2xl font-medium text-center'>
        Frequently Asked Questions
      </h3>
      <div className='lg:w-[60vw]'>
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
