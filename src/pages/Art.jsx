import React from 'react';

import { CompWrapper, SpotlightText } from '../components/shared';
import Painting from '../components/Painting';
import { paintingsData } from '../constants';
import { slugify } from '../utils';

const Art = () => {
    return (
        <CompWrapper>
            <SpotlightText text="art" />
            <section id="art" className="min-h-[100vh] min-w-[100vw] pt-0 mt-0">
                <div className="art__container">
                    {paintingsData.map((painting) => {
                        const link = `/art/${slugify(painting.name)}`;
                        return (
                            <Painting
                                key={painting.id}
                                imageSrc={painting.imageSrc}
                                altText={painting.altText}
                                link={link}
                            />
                        );
                    })}
                </div>
            </section>
        </CompWrapper>
    );
};

export default Art;
