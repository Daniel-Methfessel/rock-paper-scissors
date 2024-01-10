import { useTranslation } from "react-i18next";
import { useRouteError } from "react-router-dom";

export default function NotFound() {
    const error = useRouteError();
    console.error(error);

    const { t } = useTranslation();

    return (
        <div id="not-found">
            <p>{t('Not found')}</p>
        </div>
    )
}