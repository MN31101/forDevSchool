class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }
    pageCount() {
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }
    itemCount() {
        return this.collection.length;
    }
    pageItemCount(pageIndex) {
        if (pageIndex >= this.pageCount() || pageIndex < 0) return -1;
        return (pageIndex === this.pageCount() - 1)
            ? (this.collection.length % this.itemsPerPage === 0)
                ? this.itemsPerPage
                : this.collection.length % this.itemsPerPage
            : this.itemsPerPage;
    }
    pageIndex(itemIndex) {
        for (let i = 0; i < this.pageCount(); i++) {
            if (itemIndex < this.itemsPerPage * (i + 1) && itemIndex > 0 && this.collection.length > itemIndex || itemIndex === 0) return i;
        }
        return -1;
    }
}