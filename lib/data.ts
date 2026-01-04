import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'ayushghodake1221@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Ayush, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/ayu5h4' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/ayush-ghodake-181a42328/' },
];

export const MY_STACK = {
    'Programming Languages': [
        {
            name: 'C',
            icon: '/logo/c.png',
        },
        {
            name: 'C++',
            icon: '/logo/cpp.png',
        },
        {
            name: 'Java',
            icon: '/logo/java.png',
        },
        {
            name: 'Python',
            icon: '/logo/python.png',
        },
        {
            name: 'PHP',
            icon: '/logo/php1.png',
        },
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },  
    ],
    'Libraries/Frameworks': [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Pytorch',
            icon: '/logo/pytorch.png',
        },
    ],
    'Tools / Platforms': [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Vs Code',
            icon: '/logo/vs.png',
        },
        {
            name: 'Google Colab',
            icon: '/logo/colab.png',
        },
    ],
    Databases: [
        {
            name: 'MySql',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Fashion_item_classifier_model',
        slug: 'Fashion_item_classifier_model',
        sourceCode: 'https://github.com/ayu5h4/Fashion_item_classifier_model',
        year: 2023,
        description: 'A convolutional neural network on computer vision that does multiclass classication based on TinyVgg architecture with 10 layers',
        techStack: ['Python','PyTorch'],
        thumbnail: '/projects/images/Fashion_item_classifier_model_1.png',
        longThumbnail: '',
        images: ['/projects/images/Fashion_item_classifier_model_1.png'],
        role: '',
    },
    {
        title: 'college-feedback-system',
        slug: 'college-feedback-system',
        sourceCode: 'https://github.com/ayu5h4/college-feedback-system',
        year: 2023,
        description: 'A simple feedback system to collect feedback about college from students and teachers',
        techStack: ['JavaScript', 'CSS', 'HTML'],
        thumbnail: '/projects/images/collegefeedback_thumbnail.png',
        longThumbnail: '',
        images: ['/projects/images/collegefeedback_1.png','/projects/images/collegefeedback_2.png','/projects/images/collegefeedback_3.png'],
        role: '',
    },
    {
        title: 'chatbot_token_tracker',
        slug: 'chatbot_token_tracker',
        sourceCode: 'https://github.com/ayu5h4/chatbot_token_tracker',
        year: 2023,
        description: 'This is a lightweight, client-side web application that interacts directly with Google\'s Gemini AI API. It serves as a custom chat interface.',
        techStack: ['JavaScript', 'CSS', 'HTML'],
        thumbnail: '/projects/images/chatbottokentracker.png',
        longThumbnail: '',
        images: ['/projects/images/chatbottokentracker.png'],
        role: '',
    },
    {
        title: 'HandwrittenNumberIdentifier',
        slug: 'HandwrittenNumberIdentifier',
        sourceCode: 'https://github.com/ayu5h4/HandwrittenNumberIdentifier',
        year: 2023,
        description: 'A neural network model that predicts a handwritten number using CNN (tinyVgg architecture)',
        techStack: ['Python','PyTorch'],
        thumbnail: '/projects/images/mnist.png',
        longThumbnail: '',
        images: ['/projects/images/mnist.png'],
        role: '',
    },
];

export const MY_EXPERIENCE = [];
