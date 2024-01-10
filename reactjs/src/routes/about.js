import { useTranslation } from 'react-i18next';
import SelectLocale from '../components/select-locale';

import './about.scss';

export default function About() {
    const { t } = useTranslation();

    return (
        <div className="about-content">
            <header>
                <h1>{t('Rock, paper, scissors')}</h1>

                <SelectLocale />
            </header>

            <p>{t('A rock-paper-scissors game against a computer opponent.')}</p>

            <a href="/play" className="start-game">{t('Play!')}</a>

            <div className="alternatives">
                <h2>{t('Alternative frontend frameworks')}</h2>

                <p>{t('Why alternative frameworks.')}</p>

                <ol>
                    <li><a href="../angular/">Angular</a></li>
                    <li><a href="../blazor/">Blazor</a></li>
                    <li><a href="../vue/">Vue.js</a></li>
                </ol>
            </div>

            <div className="sources">
                <h2>{t('References')}</h2>

                <ol>
                    <li><a href="https://github.com/elsehow/aaronson-oracle">{
                        t('Concept')}</a>
                        &#xa0;
                        ({t('Thanks to')}
                        &#xa0;
                        <a href="https://www.linkedin.com/in/harald-meyer-auf-m-hofe-00934a116/">Harald</a>
                        &#xa0;
                        {t('for the suggestion.')})
                    </li>
                    <li><a href="https://openclipart.org/detail/325645/hands-3">{
                        t('Source of the hand images.')}</a></li>
                    <li><a href="https://github.com/Daniel-Methfessel/rock-paper-scissors/tree/master/reactjs">{
                        t('GitHub repository for the source code of this page.')}</a></li>
                    <li><a href={'http://www.DaMe-Software.' + t('com')}>{
                        t('My website.')}</a></li>
                </ol>
            </div>
        </div>
    )
}