// Shadcn UI
import { Input } from '@ui/input';
import { Button } from '@ui/button';
import { SidebarProvider } from '@ui/sidebar';
import { AppSidebar } from '@components/AppSidebar';

// React Icons
import { Search, SlidersHorizontal, Plus } from 'lucide-react';

function App() {
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
                                className="size-12"
                            >
                                <SlidersHorizontal className="size-6" />
                            </Button>
                            {/* '+' 버튼 */}
                            <Button
                                variant="secondary"
                                size="icon"
                                className="size-12 bg-black"
                            >
                                <Plus className="size-6 text-white" />
                            </Button>
                        </div>
                        {/* 메이슨리 레이아웃 */}
                    </div>
                </main>
            </SidebarProvider>
        </>
    );
}

export default App;
