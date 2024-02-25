import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: 1,
            label: 'Can i use react in project',
            content: 'You can use react on any project you want'
        },
        {
            id: 2,
            label: 'Can i use javascript in project',
            content: 'You can use javascript on any project you want'
        },
        {
            id: 3,
            label: 'Can i use Angular in project',
            content: 'You can use Angular on any project you want'
        },
    ]

    return (
        <div>
            <Accordion items={items}/>
        </div>
    )
}

export default AccordionPage
