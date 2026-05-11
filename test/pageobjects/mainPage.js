
/**
 * sub page containing specific selectors and methods for a specific page
 */
export class MainPage {

    get allowButton(){
        return browser.$('id=pdf.reader.pdfviewer.pdfeditor:id/tv_ok')
    }

    get allowAccessCheckBox() {
        return browser.$('id=android:id/switch_widget')
    }

    get consentButton() {
        if (process.env.PLATFORM == 'local') {
            console.log('LOCAL RUN')
            return browser.$('android=new UiSelector().text("Consent")');
        }
        else {
            console.log('NON LOCAL RUN')
            return browser.$('//android.widget.Button[@content-desc="Consent"]');
        }
        
        
    }

    get addButtonDoc() {
        return browser.$('id=pdf.reader.pdfviewer.pdfeditor:id/home_add_function_img')
    }

    get imageToPdfButton() {
        return browser.$('id=pdf.reader.pdfviewer.pdfeditor:id/img2pdf_img')
    }

}


