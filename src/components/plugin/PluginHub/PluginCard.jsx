import Button from "@/components/common/ReactComponents/Button.jsx"
const PluginCardList = (props) => {
    const { dataSource } = props;

    const groupedPlugins = dataSource.plugins.reduce((acc, item) => {
        const key = item.SecondaryTitle || ""; // 默认分组名
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    }, {});

    return (
        <div className='my-8 mx-auto'>
            <p className="block text-[36px] leading-9 font-medium mb-12">{dataSource.Functionality}</p>

            {Object.entries(groupedPlugins).map(([secondaryTitle, plugins]) => (
                <div key={secondaryTitle}>
                    <h2 className="text-lg font-bold mb-4 mt-4">{secondaryTitle}</h2>
                    <div className="grid gap-8 gap-x-12 sm:gap-y-8 not-content lg:grid-cols-3 sm:grid-cols-2">
                        {plugins.map((item) => (
                            <a
                                key={item.Title} // 确保每个子组件都有唯一的键
                                href={item.Link}
                                class="no-underline hover-transform-box-shadow bg-error nounderline relative flex flex-col hover:shadow-xl transition ease-in-out hover:scale-[102%] cursor-pointer rounded-lg backdrop-blur border border-[#ffffff29]"
                            >
                                <div class="p-6 rounded-2xl ">
                                    <div class='flex flex-row justify-between items-center'>
                                        <img class="logo w-12 h-12 rounded-lg" src="https://img.alicdn.com/imgextra/i3/O1CN01dMHdeW24VsfWvPRA9_!!6000000007397-2-tps-192-192.png" alt="start" />
                                        <div class="flex flex-row items-center">
                                            <Button
                                                size="medium"
                                                class="rounded-xl text-neutral mr-4"
                                                href={item.GithubHigressUrl}
                                                target="_blank"
                                                type="normal"
                                                iconClass="text-neutral"
                                            >
                                                <svg
                                                    viewBox="0 80 1024 800"
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    p-id="3233"
                                                    width="20"
                                                    height="20"
                                                >
                                                    <path
                                                        d="M20.48 503.72608c0 214.4256 137.4208 396.73856 328.94976 463.6672 25.8048 6.5536 21.87264-11.8784 21.87264-24.33024v-85.07392c-148.93056 17.44896-154.86976-81.1008-164.94592-97.52576-20.23424-34.52928-67.91168-43.33568-53.69856-59.76064 33.91488-17.44896 68.48512 4.42368 108.46208 63.61088 28.95872 42.88512 85.44256 35.6352 114.15552 28.4672a138.8544 138.8544 0 0 1 38.0928-66.7648c-154.25536-27.60704-218.60352-121.77408-218.60352-233.79968 0-54.31296 17.94048-104.2432 53.0432-144.54784-22.36416-66.43712 2.08896-123.24864 5.3248-131.6864 63.81568-5.7344 130.00704 45.6704 135.168 49.68448 36.2496-9.78944 77.57824-14.9504 123.82208-14.9504 46.4896 0 88.064 5.3248 124.5184 15.23712 12.288-9.4208 73.80992-53.53472 133.12-48.128 3.15392 8.43776 27.0336 63.93856 6.02112 129.4336 35.59424 40.38656 53.69856 90.76736 53.69856 145.24416 0 112.18944-64.7168 206.4384-219.42272 233.71776a140.0832 140.0832 0 0 1 41.7792 99.9424v123.4944c0.86016 9.87136 0 19.6608 16.50688 19.6608 194.31424-65.49504 334.2336-249.15968 334.2336-465.5104C1002.57792 232.48896 782.66368 12.77952 511.5904 12.77952 240.18944 12.65664 20.48 232.40704 20.48 503.72608z"
                                                        p-id="3234"
                                                    >
                                                    </path>
                                                </svg>
                                            </Button>
                                            <Button
                                                size="medium"
                                                class="rounded-xl text-neutral"
                                                href={item.Link}
                                                target="_blank"
                                                type="normal"
                                                iconClass="text-neutral"
                                            >
                                                <svg t="1723787259330" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4295" width="20" height="20">
                                                    <path d="M288 320h448a32 32 0 0 0 0-64H288a32 32 0 0 0 0 64zM288 544h448a32 32 0 0 0 0-64H288a32 32 0 0 0 0 64zM544 704H288a32 32 0 0 0 0 64h256a32 32 0 0 0 0-64z" p-id="4296"></path>
                                                    <path d="M896 132.928C896 77.28 851.552 32 796.928 32H227.04C172.448 32 128 77.28 128 132.928v758.144C128 946.72 172.448 992 227.04 992h435.008c1.568 0 2.912-0.672 4.416-0.896 8.96 1.6 18.464-0.256 25.984-6.528l192-160a31.424 31.424 0 0 0 10.816-27.2c0.16-1.184 0.736-2.208 0.736-3.424V132.928zM192 891.072V132.928C192 112.576 207.712 96 227.04 96h569.888C816.288 96 832 112.576 832 132.928V736h-96a96 96 0 0 0-96 96v96H227.04C207.712 928 192 911.424 192 891.072zM814.016 800L704 891.68V832a32 32 0 0 1 32-32h78.016z" p-id="4297"></path>
                                                </svg>
                                            </Button>
                                        </div>
                                    </div>
                                    <p class="mt-4 text-[18px] leading-[18px] font-medium text-neutral">{item.Title}</p>
                                    <p class="mt-[25px] text-[10px] leading-[18px] font-medium text-success">{item.Des}</p>
                                </div>
                            </a>
                        ))}
                    </div>

                </div>
            ))}
        </div>

    )
}

export default PluginCardList;
