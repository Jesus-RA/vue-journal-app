export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, magnam! Eos odit cum omnis ullam dolorem! Cupiditate impedit repellat deleniti molestiae aliquam provident amet quia ipsum, velit iste ducimus laborum.',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Eos odit cum omnis ullam dolorem! Cupiditate impedit repellat deleniti molestiae aliquam provident amet quia ipsum, velit iste ducimus laborum.',
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Cupiditate impedit repellat deleniti molestiae aliquam provident amet quia ipsum, velit iste ducimus laborum.',
            picture: null
        },
    ]
})