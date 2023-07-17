
export const hero = {
    type: "basic",
    topMessage: "here is the top mesage",
    heading: "title",
    subheading: "subheading",
    backgroundImage: "http://placekitten.com/1440/900"
}

export const navigation = {
    type: "center",
    logo: "logo here",
    links: [
        {
            linkText: "linktext1",
            link: "#"
        },
        {
            linkText: "linktext1",
            link: "#"
        },
        {
            linkText: "linktext1",
            link: "#"
        }
    ]
}

export const theme = {
    primaryColorLight: "#fae9e3",
    primaryColor: "#E89275",
    primaryColorDark: "#8b5746",
    secondaryColorDark: "#5d706d",
    secondaryColor: "#9CBCB7",
    secondaryColorLight: "#e1eae9",
    neutralColorDark: "#332f2e",
    neutralColor: "#8d8481",
    neutralColorLight: "#d9d6d5",
    buttonRounded: true
}

export const pages = [
    {
        id: "3ertg",
        url: "/",
        title: "my page title",
        description: "my page description"
    }
]

export const sections = [
    {
        page: "/",
        type: "one-col",
        index: 0,
        title: {
            position: "right",
            text: "section one title"
        },
        subtitle: {
            position: "right",
            text: "section subtitle"
        },
        columns: [
            {
                position: "center",
                content: [
                    {
                        type: "paragraph", 
                        content: [
                            "Uptatem aut delectus blanditiis At perspiciatis autem ad accusamus cuut numquam quas ea ver"
                        ]
                    }
                ]
            }
        ]
        
    },
    {
            page: "/",
            type: "two-col",
            title: {
                position: "center",
                text: "section two title"
            },
            columns: [
                {
                    position: "right",
                    content: [
                        {
                            type: "paragraph", 
                            content: [
                                "Uptatem aut delectus blanditiis At perspiciatis autem ad accusamus cuu numquam quas ea ver",
                                "Fwam vel dolores omnis aut enim repellendus cum neque enim serwer est earum possimus et enimd",
                                "Qnissimos dolorem aut beatae suscipit et nesciunt quae ad nulla lium quidem maxime eums"
                            ]
                        },
                    ]
                },

                {
                    content: [
                        {
                            type: "image",
                            url: "http://placekitten.com/400/400",
                            description: "kitten"
                        },
                    ]
                }
            ]
        
    },
    {
        page: "/",
        type: "three-col",
        subtitle: {
            position: "left",
            text: "section subtitle"
        },
        columns: [
            {
                position: "center",
                colTitle: "column 1 title",
                colSubtitle: "column 1 subtitle",
                content: [
                    {
                        type: "paragraph", 
                        content: [
                            "Ut optio quia ut voluptatum voluptas ut libero quod id error ipsa hic similique beatae est optio omnis. Non voluptatem dolores non iste nobis sit quia sapiente ea iure aperiam."
                        ]
                    }
                ]
            },
            {
                position: "center",
                colTitle: "column 2 title",
                colSubtitle: "column 2 subtitle",
                content: [
                    {
                        type: "paragraph", 
                        content: [
                            "Lorem ipsum dolor sit amet, ore et dolore magna aliqua.",
                            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exwra commodo consequat.",
                            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                            "Excepteur im id est laborum."
                        ]
                    }
                ]
            },
            {
                position: "center",
                colTitle: "column 2 title",
                colSubtitle: "column 2 subtitle",
                content: [
                    {
                        type: "paragraph", 
                        content: [
                            "Cum impedit veure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                            "Excepteur im id estollitia temporibus. Aut laboriosam cumque eum sunt architecto qui aliquam galisum quo tot laborum."
                        ]
                    }
                ]
            }
        ]
    },
    {
        page: "/",
        type: "four-col",
        title: {
            position: "center",
            text: "section three title"
        },
        columns: [
            {
                position: "left",
                content: [
                    {
                        type: "image",
                        url: "http://placekitten.com/300/300",
                        description: "kitten"
                    },
                    {
                        type: "paragraph", 
                        content: [
                            "Lorem ipsum dolor sit amet"
                        ]
                    }
                ]

            },
            {
                position: "left",
                colTitle: "column 2 title",
                content: [
                    {
                        type: "paragraph", 
                        content: [
                            "Lorepedit veritatis ut dolorem temporibus aut voluptatem fuga ea corrupti neque id ipsa omnis et dour.",
                            "Citationem totam ut labore fugit aut explicabo aliquam ut illo nulla ut distinctio adipism."
                        ]
                    }
                ]
            },
            {
                position: "left",
                content: [                        
                    {
                        type: "image",
                        url: "http://placekitten.com/301/301",
                        description: "kitten"
                    },
                    {
                        type: "paragraph", 
                        content: [
                            "Lorboris nisi ut aliquip ex ea commodo consequ"
                        ]
                    }
                ]
            },
            {
                position: "left",
                colTitle: "column 2 title",
                content: [
                    {
                        type: "paragraph", 
                        content: [
                            "Wboris nisi ut aimpedit veritatis ut dolorem temporibus aut voluptatem fuga ea corrupti neque id ipscillum do"
                        ]
                    }
                ]
            },
        ]
    }
]
