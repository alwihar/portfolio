import React from 'react';
import { useParams } from 'react-router-dom';
import {Button, CompWrapper, MainWrapper} from '../components/shared';
import { paintingsData } from '../constants';
import { slugify } from '../utils';

const PaintingDetail = () => {
    const { slug } = useParams();
    const painting = paintingsData.find(
        (p) => slugify(p.name) === slug
    );

    const handleViewOnChainClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    if (!painting) {
        return (
            <CompWrapper>
                <MainWrapper id="painting-not-found" customCss="min-h-[70vh] flex items-center justify-center">
                    <h1 className="text-3xl text-white">Painting not found</h1>
                </MainWrapper>
            </CompWrapper>
        );
    }

    return (
        <CompWrapper>
            <MainWrapper id="painting-detail" customCss="min-h-[70vh] flex flex-col items-center justify-center">
                <img src={painting.imageSrc} alt={painting.altText} className="w-3/4 h-auto mb-6" />
                <p className="text-main text-lg max-w-2xl text-center mb-4">
                    {painting.name}
                </p>
                {painting.nftLink && (
                    <Button
                        title='view on chain'
                        onClick={() => handleViewOnChainClick(painting.nftLink)}
                        style='contact_submit-button bg-secondary'
                    />
                )}
            </MainWrapper>
        </CompWrapper>
    );
};

export default PaintingDetail;
