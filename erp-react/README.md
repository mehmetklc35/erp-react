
## 📁 Klasör Yapısı

```bash
src/
│
├── assets/                # Görseller, ikonlar ve diğer medya dosyaları
│
├── components/            # Tekrar kullanılabilir UI bileşenleri
│   ├── Button.jsx
│   ├── Input.jsx
│   └── Modal.jsx
│
├── features/              # ERP modülleri (her biri kendi bileşenleri ile birlikte)
│   ├── users/             # Kullanıcı yönetimi
│   │   ├── UserList.jsx
│   │   ├── AddUserForm.jsx
│   │   └── userSlice.js   # Redux varsa
│   │
│   ├── products/          # Ürün ve stok yönetimi
│   │   ├── ProductList.jsx
│   │   └── AddProductForm.jsx
│   │
│   ├── orders/            # Sipariş yönetimi
│   │   ├── OrderList.jsx
│   │   └── CreateOrderForm.jsx
│   │
│   └── invoices/          # Fatura yönetimi
│       ├── InvoiceList.jsx
│       └── CreateInvoiceForm.jsx
│
├── pages/                 # Sayfa bileşenleri (router'a bağlı)
│   ├── Dashboard.jsx
│   ├── Users.jsx
│   ├── Products.jsx
│   └── Orders.jsx
│
├── services/              # API işlemleri (fetch/axios vs.)
│   ├── userService.js
│   ├── productService.js
│   └── orderService.js
│
├── context/               # Context API (global state yönetimi)
│   ├── AuthContext.jsx
│   └── ThemeContext.jsx
│
├── hooks/                 # Özel React hook'ları
│   └── useFetch.js
│
├── utils/                 # Yardımcı fonksiyonlar ve sabitler
│   ├── helpers.js
│   └── constants.js
│
├── App.jsx                # Uygulama kök bileşeni
├── main.jsx               # React uygulamasının giriş noktası
└── index.css              # Global stiller (Tailwind CSS veya özel)
