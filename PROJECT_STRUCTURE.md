# Project structure

```text
src/
├─ app/                 # Router, providers, app shell
├─ components/
│  ├─ common/           # BottomSheet, reusable UI, record motif
│  └─ layout/           # Header, bottom navigation, layout
├─ constants/           # Booth category legend
├─ data/                # 2026 PRD fallback data
├─ hooks/               # Query hooks, current-time hook
├─ pages/
│  ├─ SplashPage/
│  ├─ HomePage/
│  ├─ PerformancePage/  # one integrated schedule + detail sheet
│  ├─ KamfIntroPage/
│  ├─ MapPage/          # full mobile SVG map + detail sheet
│  ├─ BoothListPage/    # search/filter + detail sheet
│  ├─ MorePage/
│  ├─ ContactPage/
│  └─ AppInfoPage/
├─ services/            # Supabase read layer with fallback
├─ styles/
└─ types/

supabase/
└─ schema.sql            # public read-only tables/RLS policies
```
