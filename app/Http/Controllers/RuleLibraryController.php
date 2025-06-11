<?php

namespace App\Http\Controllers;

use App\Models\BannerPosition;
use Inertia\Inertia;
use App\Models\Banner;
use App\Models\Heading;
use App\Models\Item;
use App\Models\Page;
use App\Models\Post;

class RuleLibraryController extends Controller
{
    public function index()
    {
        $slide = Banner::where('position_code', 'SLIDE_SHOW')->orderBy('order_index')->where('status', 'active')->get();
        $newBooks = Item::where('category_code', 'NEW_BOOKS')->with('images')->get();
        $researchPaper = Item::where('category_code', 'RESEARCH_PAPERS')->with('images')->get();
        $heroSection = Page::where('code', 'HOME_PAGE')->with('images')->first();
        $newPost = Post::with('images')
            ->where('status', 'active')
            ->get();
        $videos = Item::where('category_code', 'VIDEOS')->where('status', 'active')->with('images')->get();
        // return $videos;
        return Inertia::render('rule-library/Index', [
            'slide' => $slide,
            'newBooks' => $newBooks,
            'researchPaper' => $researchPaper,
            'heroSection' => $heroSection,
            'newPost' => $newPost,
            'videos' => $videos,
        ]);
    }
    public function about()
    {
        $banner = BannerPosition::where('code', 'ABOUT_PAGE_BANNER')->first();
        $aboutPage = Page::where('code', 'ABOUT_PAGE')->with('images')->get();
        $ourValues = Page::where('code', 'OUR_VALUES')->with(['children.images'])->get();
        //  return $ourValues;
        return Inertia::render('rule-library/About', [
            'banner' => $banner,
            'aboutPage' => $aboutPage,
            'ourValues' => $ourValues,
        ]);
    }
    public function collections()
    {
        $banner = BannerPosition::where('code', 'COLLECTION_PAGE_BANNER')->first();
        $query = Item::query();
        $query->where('category_code', 'COLLECTIONS');
        $query->orderBy('id', 'desc');
        $query->with('images');
        $tableData = $query->paginate(40);

        $heading = Heading::where('code', 'COLLECTIONS')->first();
        return Inertia::render('rule-library/collections/Index', [
            'banner' => $banner,
            'tableData' => $tableData,
            'heading' => $heading,
        ]);
    }
    public function resources()
    {
        $banner = BannerPosition::where('code', 'RESOURCES_PAGE_BANNER')->first();
        $query = Item::query();
        $query->where('category_code', 'RESOURCES');
        $query->orderBy('id', 'desc');
        $query->with('images');
        $tableData = $query->paginate(40);

        $heading = Heading::where('code', 'RESOURCES')->first();
        return Inertia::render('rule-library/resources/Index', [
            'banner' => $banner,
            'tableData' => $tableData,
            'heading' => $heading,
        ]);
    }
    public function databases()
    {
        $banner = BannerPosition::where('code', 'DATABASES_PAGE_BANNER')->first();
        $query = Item::query();
        $query->where('category_code', 'DATABASES');
        $query->orderBy('id', 'desc');
        $query->with('images');
        $tableData = $query->paginate(40);

        $heading = Heading::where('code', 'DATABASES')->first();

        return Inertia::render('rule-library/databases/Index', [
            'banner' => $banner,
            'tableData' => $tableData,
            'heading' => $heading,
        ]);
    }


    public function detail($id)
    {
        $showData = Item::findOrFail($id);
        return Inertia::render('rule-library/Detail', [
            'showData' => $showData->load('images', 'category'),
        ]);
    }

    public function contact()
    {
        return Inertia::render('rule-library/Contact');
    }
    public function news_show($id)
    {
        $itemShow = Post::with('images')->find($id);
        $bannerInDetail = Banner::where('position_code', 'BANNER_IN_VIEW_DETAIL')->orderBy('order_index')->where('status', 'active')->get();
        // $itemShow = Post::with('images')
        // ->where('status', 'active')
        // ->get();
        //  return  $itemShow;
        return Inertia::render('rule-library/news/Show', [
            'id' => $id,
            'bannerInDetail' => $bannerInDetail,
            'itemShow' => $itemShow,
        ]);
    }
    // public function collection_show($id)
    // {
    //     $itemShow = Post::with('images')->find($id);
    //     $bannerInDetail = Banner::where('position_code', 'BANNER_IN_VIEW_DETAIL')->orderBy('order_index')->where('status', 'active')->get();
    //     // $itemShow = Post::with('images')
    //     // ->where('status', 'active')
    //     // ->get();
    //     //  return  $itemShow;
    //     return Inertia::render('rule-library/Detail', [
    //         'id' => $id,
    //         'bannerInDetail' => $bannerInDetail,
    //         'itemShow' => $itemShow,
    //     ]);
    // }
}
