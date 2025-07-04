// React
import { useState } from 'react';

// Shadcn UI
import { Input } from '@ui/input';
import { Button } from '@ui/button';
import { SidebarProvider } from '@ui/sidebar';
import { AppSidebar } from '@components/AppSidebar';

// React Icons
import { Search, SlidersHorizontal, Plus } from 'lucide-react';

import { MasonryInfiniteGrid } from '@egjs/react-infinitegrid';

function getItems(nextGroupKey, count) {
    const nextItems = [];
    const nextKey = nextGroupKey * count;

    for (let i = 0; i < count; ++i) {
        nextItems.push({ groupKey: nextGroupKey, key: nextKey + i });
    }
    return nextItems;
}

const Item = (item) => {
    const num = item.num;
    return (
        <div className="item flex flex-col">
            {/* 썸네일 이미지 */}
            <div className="thumbnail">
                <img
                    src={`https://naver.github.io/egjs-infinitegrid/assets/image/${
                        (num % 33) + 1
                    }.jpg`}
                    alt="egjs"
                />
            </div>
            {/* 유저 정보 */}
            <div className="flex items-center justify-start gap-2 py-2">
                {/* 유저 프로필 이미지 */}
                <img
                    src="https://naver.github.io/egjs-infinitegrid/assets/image/2.jpg"
                    alt="Circular Image"
                    class="w-10 h-10 aspect-square rounded-full object-cover"
                />
                <div className="flex flex-col text-xs">
                    {/* 유저명 */}
                    <p className="font-bold">Username</p>
                    {/* 유저 팔로워 */}
                    <p className="text-gray-400">{`${
                        num + Math.floor(Math.random() * 51)
                    } Follwers`}</p>
                </div>
            </div>
        </div>
    );
};

function App() {
    const [items, setItems] = useState(() => getItems(0, 10));

    return (
        <>
            <SidebarProvider>
                {/* 사이드바 */}
                <AppSidebar />
                {/* 메인 컴포넌트 */}
                <main className="w-screen h-screen ">
                    {/* 전체 화면 */}
                    <div className="p-8">
                        {/* 검색 컨테이너 */}
                        <div className="w-full pb-4 flex items-center gap-4">
                            {/* 검색바 */}
                            <div className="relative w-full">
                                <Search className="absolute left-6 top-1/2 h-6 w-6 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    className="pl-16 h-16 bg-gray-100 font-semibold" // 아이콘 공간 확보
                                    type="search"
                                    placeholder="Search"
                                />
                            </div>
                            {/* '필터' 버튼 */}
                            <Button
                                variant="secondary"
                                size="icon"
                                className="size-12 bg-white shadow-lg"
                            >
                                <SlidersHorizontal className="size-6 text-black" />
                            </Button>
                            {/* '+' 버튼 */}
                            <Button
                                variant="secondary"
                                size="icon"
                                className="size-12 bg-black shadow-lg"
                            >
                                <Plus className="size-6 text-white" />
                            </Button>
                        </div>
                        {/* 메이슨리 레이아웃 */}
                        <MasonryInfiniteGrid
                            className="container"
                            gap={5}
                            align={'justify'}
                            useFirstRender={true}
                            onRequestAppend={(e) => {
                                const nextGroupKey = (+e.groupKey || 0) + 1;

                                setItems([
                                    ...items,
                                    ...getItems(nextGroupKey, 10),
                                ]);
                            }}
                            onRenderComplete={(e) => {
                                console.log(e);
                            }}
                        >
                            {items.map((item) => (
                                <Item
                                    data-grid-groupkey={item.groupKey}
                                    key={item.key}
                                    num={item.key}
                                />
                            ))}
                        </MasonryInfiniteGrid>
                    </div>
                </main>
            </SidebarProvider>
        </>
    );
}

export default App;
