import Form from "@/app/form";

const Banner = () => {
    return (
        <header>
            <div className="mx-auto flex max-w-[1240px] flex-row  gap-5 justify-between pt-6">
                <div className="flex-1"></div>
                <div className="flex-1validators.js">
                    <Form />
                </div>
            </div>
        </header>
    )
}
export default Banner;