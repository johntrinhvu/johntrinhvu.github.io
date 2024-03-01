import { NewspaperIcon } from "@heroicons/react/solid";

export default function Resume() {
    return (
        <section id="resume" className="scroll-margin-top text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <NewspaperIcon className="mx-auto inline-block w-10 mb-4 text-purple-400" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Work Experience
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-related text-base">
                        While I'm currently a student in college, I've eagerly pursued opportunities to gain real-world experience 
                        in the field of Software Engineering. Despite being early in my career journey, I've sought out opportunities to apply 
                        my skills and knowledge in practical settings.
                    </p>
                </div>
            </div>
        </section>
    );
}

