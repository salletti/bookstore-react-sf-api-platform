<?php

namespace App\Tests\Functional\EndToEnd;

use Symfony\Component\Panther\PantherTestCase;

final class FromHomeToShoppingCartTest extends PantherTestCase
{
    public function testNavigateFromHomeToBookPage(): void
    {
        $client = static::createPantherClient();

        //homepage
        $crawler = $client->request('GET', '/bookstore');

        //find list
        $container = $crawler->filter('.jumbotron');
        $ul = $container->filter('div')->eq(3)->filter('ul');
        $li = $ul->filter('li')->eq(0);

        //select link
        $a = $li->filter('a');
        $link = $a->link();

        //click on the book and go to the book page
        $crawler = $client->click($link);

        //waiting for loading data
        $client->waitFor('.book-detail');

        //find add to cart button
        $container = $crawler->filter('.jumbotron');
        $div = $container->filter('div')->eq(0);
        $addToCartButton = $div->filter('.add-cart-button');
        self::assertStringContainsString('Add to cart', $addToCartButton->getText());

        //click on the button
        $client->executeScript('document.querySelector(".add-cart-btn").click();');

        //click on the shopping cart of navabar
        $navbar = $crawler->filter('.navbar');
        $items = $navbar->filter('div')->eq(0)->filter('ul');
        $cartItem = $items->filter('li')->eq(1)->filter('a');
        $cartItemLink = $cartItem->link();
        $client->click($cartItemLink);

        //asserts
        self::assertPageTitleContains('Welcome to the bookstore');
        self::assertStringContainsString('CHECKOUT', $crawler->filter('.jumbotron')->getText());
    }
}
