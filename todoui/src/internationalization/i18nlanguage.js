import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en:
        {
            translations: {
                'new_todo_input': "Wash the dishes...",
                'todo_input': "Todo Input",
                'add_new_task': "Add new task",
                'all_list': "All",
                'done_list': "Done",
                'todo_list': "Todo",
                'todo_list_header': "Todo List",
                'delete_all_done': "Delete done tasks",
                'delete_all_tasks': "Delete all tasks",
                'footer_info': 'All Rights Reserved.',
                'footer_desinger': 'Design and codes By Furkan DUMANLI',
                'update_page': "Update Page",
                'update_submit': "Update the task",
                'unexpected_error':'Unexpected Error Occurred',
            }
        },
        tr:
        {
            translations: {
                'new_todo_input': "Bulaşıkları yıka...",
                'todo_input': "Yeni Görev",
                'add_new_task': "Yeni Görev Ekle",
                'all_list': "Bütün Liste",
                'done_list': "Yapılanlar",
                'todo_list': "Yapılacaklar",
                'todo_list_header': "Yapılacaklar Listesi",
                'delete_all_done': "Yapılanları Sil",
                'delete_all_tasks': "Hepsini Sil",
                'footer_info': 'Bütün Haklar Saklıdır.',
                'footer_desinger': 'Furkan Dumanlı tarafından Tasarlandı ve Kodlandı',
                'update_page': "Güncelleme Sayfası",
                'update_submit': "Görevi Güncelle",
                'unexpected_error':'Beklenmedik Hata Oluştu',
            }
        }
    },
    fallbackLng: 'tr',    //fallbackLng: 'en', fall back function    
    ns: ['translations'], //kelimeleri nerede alsın
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: { escapeValue: false, formatSeparator: ',' },
    react: {
        wait: true
    }
});
export default i18n;