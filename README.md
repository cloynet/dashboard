# 🛡️ Next.js Auth Dashboard

Basit bir **Next.js kullanıcı girişi ve dashboard projesi**. **React Context** ve **LocalStorage** kullanarak temel login, kayıt ve korumalı sayfaların nasıl oluşturulacağını gösterir.

A simple **Next.js authentication and dashboard project** demonstrating user login, registration, and protected routes using **React Context** and **LocalStorage**.

---

## ✨ Features / Özellikler

| Icon | Feature (EN) | Özellik (TR) |
| :---: | :--- | :--- |
| 🔑 | **User Registration & Login** | Kullanıcı **Kayıt ve Giriş** İşlemleri |
| 🔒 | **Protected Dashboard Route** | Korumalı **Dashboard Sayfası** |
| 📝 | User Management with **LocalStorage** | **LocalStorage** Tabanlı Kullanıcı Yönetimi |
| ⚡ | **React Context** for Auth State | **React Context** ile Authentication Durumu Yönetimi |
| 🖥️ | **Responsive Design** with Tailwind CSS | Tailwind CSS ile **Responsive Tasarım** |

---

## 🛠️ Technologies / Teknolojiler

| Kategori | Teknoloji | Açıklama (TR) | Description (EN) |
| :---: | :--- | :--- | :--- |
| **Framework** | **Next.js** | Sunucu tarafı render desteği olan React çatısı. | React framework with server-side rendering support. |
| **State Mng.**| **React Context** | Uygulama genelinde durumu yönetmek için yerleşik React aracı. | Built-in React tool for managing global application state. |
| **Styling** | **Tailwind CSS** | Hızlı ve utility-first CSS framework. | A rapid, utility-first CSS framework. |
| **Data Storage**| **LocalStorage** | Tarayıcıda veri saklamak için kullanılan API. | Browser API used for storing data locally. |

---

## ⚡ Setup / Kurulum

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1.  **Depoyu Klonlayın / Clone the repository:**
    ```bash
    git clone [https://github.com/cloynet/dashboard.git](https://github.com/cloynet/dashboard.git)
    cd dashboard
    ```

2.  **Bağımlılıkları Yükleyin / Install dependencies:**
    ```bash
    npm install
    # veya / or
    yarn install
    ```

3.  **Geliştirme Sunucusunu Başlatın / Start the development server:**
    ```bash
    npm run dev
    # veya / or
    yarn dev
    ```
Tarayıcınızda görüntülemek için http://localhost:3000 adresini açın. / Open http://localhost:3000 to view it in your browser.
---

## 📂 Project Structure / Proje Yapısı

| Klasör | Açıklama (TR) | Description (EN) |
| :--- | :--- | :--- |
| `/pages` | Next.js sayfaları (login, register, dashboard, home). | Next.js pages (login, register, dashboard, home). |
| `/context` | **AuthContext**, kimlik doğrulama durumunu yönetir. | **AuthContext** for managing the authentication state. |
| `/components` | Tekrar kullanılabilir arayüz (UI) bileşenleri. | Reusable UI components. |
| `/styles` | Global stiller ve Tailwind konfigürasyonu. | Global styles and Tailwind configuration. |

---

## 📌 Notes / Notlar

* **Veri Depolama:** Kullanıcı bilgileri demo ve basitlik amacıyla **LocalStorage**’da saklanmaktadır. Gerçek projelerde güvenlik için daha iyi yöntemler önerilir.
* **Data Storage:** User data is stored in **LocalStorage** for demonstration and simplicity. More secure methods are recommended for production applications.

---

## 🔗 Live Demo & Repository

| Bağlantı / Link | Açıklama / Description |
| :--- | :--- |
| **[Live Demo](https://dashboard-virid-kappa.vercel.app/)** | Projenin çalışan canlı demosu. / The live working demo of the project. |
| **[GitHub Repository](https://github.com/cloynet/dashboard)** | Projenin kaynak kod deposu. / The source code repository. |
